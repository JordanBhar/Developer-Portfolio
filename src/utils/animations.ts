import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const staggerChildren = (
  target: string | Element,
  animation: gsap.TweenVars,
  staggerDelay = 0.1
) => {
  gsap.to(target, {
    ...animation,
    stagger: staggerDelay,
  });
};

export const createScrollAnimation = (
  trigger: string | Element,
  animation: gsap.TweenVars,
  options: any = {}
) => {
  gsap.to(trigger, {
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'top 20%',
      ...options.scrollTrigger,
    },
    ...animation,
  });
};

export const createParallaxAnimation = (element: Element, intensity = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        gsap.set(element, {
          y: self.getVelocity() * intensity,
        });
      },
    },
  });
};

export const animateCountUp = (
  element: HTMLElement,
  target: number,
  duration = 2
) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString();
    },
  });
};
