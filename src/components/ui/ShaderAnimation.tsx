'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    // Fragment shader - Circular gradient with white inside, teal outside
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.02;

        // Distance from center
        float dist = length(uv);

        // Create animated concentric circles with waves
        float wave = sin(dist * 5.0 - t) * 0.5 + 0.5;
        float circles = sin(dist * 10.0 - t * 0.5) * 0.3 + 0.7;

        // Smooth falloff from center
        float smoothDist = smoothstep(0.0, 2.5, dist);

        // Create the gradient: white inside (0.0) to teal outside (1.0)
        float innerRadius = 0.3 + sin(t * 0.5) * 0.1;
        float gradient = smoothstep(innerRadius, 2.5, dist);

        // Add subtle animation to the gradient
        gradient += wave * 0.1;
        gradient = clamp(gradient, 0.0, 1.0);

        // White (1,1,1) inside, Teal (#14B8A6) outside
        // Teal in RGB: 0.078, 0.722, 0.651
        vec3 whiteColor = vec3(1.0, 1.0, 1.0);
        vec3 tealColor = vec3(0.078, 0.722, 0.651);

        vec3 color = mix(whiteColor, tealColor, gradient);

        // Add glow effect with falloff
        float glow = circles * (1.0 - smoothDist);
        color += glow * tealColor * 0.5;

        // Feather edges
        float alpha = 1.0 - smoothstep(2.4, 3.0, dist);

        gl_FragColor = vec4(color, alpha);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: 'f', value: 1 },
      resolution: { type: 'v2', value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      depthWrite: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener('resize', onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          sceneRef.current.renderer.domElement.remove()
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'transparent',
        overflow: 'hidden',
      }}
    />
  )
}

export default ShaderAnimation
