import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function fadeIn(
  targets: gsap.TweenTarget,
  options: { delay?: number; duration?: number; trigger?: Element | null } = {}
) {
  const { delay = 0, duration = 0.5, trigger } = options
  return gsap.fromTo(
    targets,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: trigger
        ? { trigger, start: 'top 85%' }
        : undefined,
    }
  )
}

export function drawRule(
  targets: gsap.TweenTarget,
  options: { delay?: number; trigger?: Element | null } = {}
) {
  const { delay = 0, trigger } = options
  return gsap.fromTo(
    targets,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: trigger
        ? { trigger, start: 'top 80%' }
        : undefined,
    }
  )
}

export function stampReveal(
  target: gsap.TweenTarget,
  trigger: Element | null
) {
  return gsap.fromTo(
    target,
    { scale: 0.85, opacity: 0, rotate: -3 },
    {
      scale: 1,
      opacity: 0.9,
      rotate: -2,
      duration: 0.35,
      ease: 'back.out(1.5)',
      scrollTrigger: trigger
        ? { trigger, start: 'top 85%' }
        : undefined,
    }
  )
}
