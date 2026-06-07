export interface HeroScrollState {
  headlineOpacity: number;
  headlineScale: number;
  headlineY: number;
  subheadlineOpacity: number;
  subheadlineY: number;
  buttonsOpacity: number;
  buttonsScale: number;
  buttonGlow: number;
  backgroundDepth: number;
  backgroundMovement: number;
}

export interface ScrollTriggerConfig {
  start: string;
  end: string;
  scrub: number | boolean;
  markers?: boolean;
}

export interface ParallaxLayer {
  id: string;
  speed: number;
  opacity: number;
}

export interface TechTag {
  name: string;
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
}
