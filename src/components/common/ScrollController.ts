import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollController {
  private triggers: ScrollTrigger[] = [];

  initializeScrollAnimations(sections: {
    heroSectionRef: HTMLElement | null;
    headlineRef: HTMLElement | null;
    subheadlineRef: HTMLElement | null;
    buttonsRef: HTMLElement | null;
    backgroundRef: HTMLElement | null;
    aboutSectionRef: HTMLElement | null;
    skillsSectionRef: HTMLElement | null;
    cloudInfraSectionRef: HTMLElement | null;
    projectsSectionRef: HTMLElement | null;
    educationSectionRef: HTMLElement | null;
  }) {
    const {
      heroSectionRef,
      headlineRef,
      subheadlineRef,
      buttonsRef,
      backgroundRef,
      aboutSectionRef,
      skillsSectionRef,
      cloudInfraSectionRef,
      projectsSectionRef,
      educationSectionRef,
    } = sections;
    if (!heroSectionRef) return;

    // Kill all existing triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    this.triggers = [];

    // === HEADLINE ANIMATION ===
    // Fade out from 100% to 12%, scale down, move up
    if (headlineRef) {
      const headlineTrigger = ScrollTrigger.create({
        trigger: heroSectionRef,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(headlineRef, {
            opacity: gsap.utils.interpolate(1, 0.12, progress),
            scale: gsap.utils.interpolate(1, 0.95, progress),
            y: gsap.utils.interpolate(0, -250, progress),
          });
        },
      });
      this.triggers.push(headlineTrigger);
    }

    // === SUBHEADLINE ANIMATION ===
    // Fade out faster, move up
    if (subheadlineRef) {
      const subheadlineTrigger = ScrollTrigger.create({
        trigger: heroSectionRef,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(subheadlineRef, {
            opacity: gsap.utils.interpolate(1, 0, progress),
            y: gsap.utils.interpolate(0, -150, progress),
          });
        },
      });
      this.triggers.push(subheadlineTrigger);
    }

    // === BUTTONS ANIMATION ===
    // Scale up, gain prominence
    if (buttonsRef) {
      const buttonsTrigger = ScrollTrigger.create({
        trigger: heroSectionRef,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(buttonsRef, {
            opacity: 1,
            scale: gsap.utils.interpolate(1, 1.05, progress),
            filter: `drop-shadow(0 0 ${progress * 20}px rgba(20, 184, 166, ${progress * 0.5}))`,
          });
        },
      });
      this.triggers.push(buttonsTrigger);
    }

    // === BACKGROUND ANIMATION ===
    // Increase depth and movement
    if (backgroundRef) {
      const backgroundTrigger = ScrollTrigger.create({
        trigger: heroSectionRef,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(backgroundRef, {
            scale: gsap.utils.interpolate(1, 1.1, progress),
            opacity: gsap.utils.interpolate(1, 0.8, progress),
          });
        },
      });
      this.triggers.push(backgroundTrigger);
    }

    // === ABOUT SECTION TRANSITION ===
    // Fade in about section as hero fades out
    if (aboutSectionRef) {
      const aboutTrigger = ScrollTrigger.create({
        trigger: heroSectionRef,
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(aboutSectionRef, {
            opacity: progress,
          });
        },
      });
      this.triggers.push(aboutTrigger);
    }

    // === SKILLS SECTION TRANSITION ===
    // Fade in skills section as about fades out
    if (skillsSectionRef && aboutSectionRef) {
      const skillsTrigger = ScrollTrigger.create({
        trigger: aboutSectionRef,
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(skillsSectionRef, {
            opacity: progress,
          });
        },
      });
      this.triggers.push(skillsTrigger);
    }

    // === CLOUD INFRASTRUCTURE SECTION TRANSITION ===
    // Fade in cloud infra section as skills fades out
    if (cloudInfraSectionRef && skillsSectionRef) {
      const cloudInfraTrigger = ScrollTrigger.create({
        trigger: skillsSectionRef,
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(cloudInfraSectionRef, {
            opacity: progress,
          });
        },
      });
      this.triggers.push(cloudInfraTrigger);
    }

    // === PROJECTS SECTION TRANSITION ===
    // Fade in projects section as cloud infra fades out
    if (projectsSectionRef && cloudInfraSectionRef) {
      const projectsTrigger = ScrollTrigger.create({
        trigger: cloudInfraSectionRef,
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(projectsSectionRef, {
            opacity: progress,
          });
        },
      });
      this.triggers.push(projectsTrigger);
    }

    // === EDUCATION SECTION TRANSITION ===
    // Fade in education section as projects fades out
    if (educationSectionRef && projectsSectionRef) {
      const educationTrigger = ScrollTrigger.create({
        trigger: projectsSectionRef,
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(educationSectionRef, {
            opacity: progress,
          });
        },
      });
      this.triggers.push(educationTrigger);
    }


  }

  createParallaxLayer(
    element: HTMLElement | null,
    speed: number,
    scrollTrigger: HTMLElement | null
  ) {
    if (!element || !scrollTrigger) return;

    gsap.to(element, {
      y: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: scrollTrigger,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }

  cleanup() {
    this.triggers.forEach((trigger) => trigger.kill());
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    this.triggers = [];
  }
}
