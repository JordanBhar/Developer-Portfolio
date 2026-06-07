import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

interface CameraControllerProps {
  enabled?: boolean;
}

export const CameraController = ({ enabled = true }: CameraControllerProps) => {
  const { camera, gl } = useThree();
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const cameraOffsetRef = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  const zoomVelocityRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent) => {
      // Only start drag on left mouse button (0 = left, 1 = middle, 2 = right)
      if (event.button !== 0) return;

      isDraggingRef.current = true;
      dragStartRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingRef.current) {
        const deltaX = event.clientX - dragStartRef.current.x;
        const deltaY = event.clientY - dragStartRef.current.y;

        // Pan the camera based on drag distance, scaled by zoom
        cameraOffsetRef.current.x -= (deltaX * 0.1) / zoomRef.current;
        cameraOffsetRef.current.y += (deltaY * 0.1) / zoomRef.current;

        dragStartRef.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      // Zoom with mouse wheel
      const zoomDelta = event.deltaY > 0 ? 1.1 : 0.9;
      zoomVelocityRef.current += (zoomDelta - 1) * 0.1;
    };

    gl.domElement.addEventListener('mousedown', handleMouseDown);
    gl.domElement.addEventListener('mouseup', handleMouseUp);
    gl.domElement.addEventListener('mousemove', handleMouseMove);
    gl.domElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      gl.domElement.removeEventListener('mousedown', handleMouseDown);
      gl.domElement.removeEventListener('mouseup', handleMouseUp);
      gl.domElement.removeEventListener('mousemove', handleMouseMove);
      gl.domElement.removeEventListener('wheel', handleWheel);
    };
  }, [gl, enabled]);

  useFrame(() => {
    if (!enabled) return;

    // Apply zoom with smooth easing
    zoomVelocityRef.current *= 0.9;
    zoomRef.current += zoomVelocityRef.current;
    zoomRef.current = Math.max(0.5, Math.min(5, zoomRef.current));

    // Constrain panning to reasonable bounds (prevent drift)
    const maxPan = 60;
    cameraOffsetRef.current.x = Math.max(-maxPan, Math.min(maxPan, cameraOffsetRef.current.x));
    cameraOffsetRef.current.y = Math.max(-maxPan, Math.min(maxPan, cameraOffsetRef.current.y));

    // Update camera position with pan offset and zoom
    camera.position.x = cameraOffsetRef.current.x;
    camera.position.y = cameraOffsetRef.current.y;
    camera.position.z = 80 / zoomRef.current;

    // Camera always looks at center
    camera.lookAt(0, 0, 0);
  });

  return null;
};
