'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.fromTo('.hero-class', { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(
          '.hero-rule-top',
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.6 },
          '-=0.1'
        )
        .fromTo(
          '.hero-meta > *',
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.05 },
          '-=0.2'
        )
        .fromTo(
          '.hero-rule-mid',
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.6 },
          '-=0.1'
        )
        .fromTo('.hero-subject-label', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2')
        .fromTo(
          '.hero-headline-line',
          { opacity: 0 },
          { opacity: 1, duration: 0.5, stagger: 0.07 },
          '-=0.1'
        )
        .fromTo(
          '.hero-rule-bottom',
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          '.hero-footer > *',
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.08 },
          '-=0.3'
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-content mx-auto w-full px-8 md:px-16 py-20">
        <div className="hero-class flex justify-between items-center mb-4 opacity-0">
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase">
            Assessment Division · Systems Intelligence
          </span>
          <span className="font-courier text-[11px] text-ink-tertiary">2026</span>
        </div>

        <div className="hero-rule-top h-px bg-rule mb-5 origin-left" />

        <div className="hero-meta flex flex-col gap-1 mb-5">
          <div className="flex gap-2">
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase w-44">
              Principal Analyst:
            </span>
            <span className="font-courier text-[13px] text-ink">Aaradhy Raghav Duvey</span>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase w-24">
                Clearance:
              </span>
              <span className="font-courier text-[13px] text-ink">Active</span>
            </div>
            <div className="flex gap-2">
              <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase w-20">
                Location:
              </span>
              <span className="font-courier text-[13px] text-ink">Jaipur, India</span>
            </div>
          </div>
        </div>

        <div className="hero-rule-mid h-px bg-rule mb-10 origin-left" />

        <div className="hero-subject-label mb-3 opacity-0">
          <span className="font-courier text-[12px] text-ink-tertiary tracking-wide uppercase">
            Subject:
          </span>
        </div>

        <h1
          className="mb-10"
          style={{ fontSize: 'clamp(36px, 9vw, 88px)' }}
        >
          <span className="hero-headline-line font-cormorant font-semibold text-ink leading-[1.05] tracking-[-0.01em] opacity-0 block">
            I build systems for problems
          </span>
          <span className="hero-headline-line font-cormorant font-semibold text-ink leading-[1.05] tracking-[-0.01em] opacity-0 block">
            I couldn&apos;t find anyone else solving.
          </span>
        </h1>

        <div className="hero-rule-bottom h-px bg-rule mb-5 origin-left" />

        <div className="hero-footer flex flex-wrap justify-between items-center gap-4">
          <div>
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase">
              Channels:{' '}
            </span>
            <span className="font-courier text-[12px] text-ink-secondary">
              Agentic AI{' '}
              <span className="text-rule mx-1">·</span>
              Cloud Systems{' '}
              <span className="text-rule mx-1">·</span>
              Published Research{' '}
              <span className="text-rule mx-1">·</span>
              IIT Podiums
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-courier text-[11px] text-ink-tertiary uppercase tracking-label">
              Distribution: Unrestricted
            </span>
            <a
              href="#method"
              className="font-courier text-[11px] text-stamp-red uppercase tracking-label animate-pulse"
            >
              [↓ Scroll to Read]
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
