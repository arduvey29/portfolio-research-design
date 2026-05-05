'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Redacted } from '@/components/Redacted'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [autoReveal, setAutoReveal] = useState(false)

  useGSAP(
    () => {
      gsap.fromTo(
        '.contact-content > *',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            onEnter: () => setAutoReveal(true),
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 md:py-[140px] relative"
    >
      <div className="max-w-content mx-auto px-16 w-full">
        <div className="contact-content flex flex-col gap-6">
          <div className="opacity-0">
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-2">
              06 / Find Me
            </span>
            <div className="h-px bg-rule mb-2" />
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block">
              Filed Under:
            </span>
            <div className="h-px bg-rule mt-2" />
          </div>

          <h2
            className="font-cormorant font-semibold text-ink leading-[1.0] max-w-[720px] opacity-0"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            If you&apos;re building{' '}
            <Redacted autoReveal={autoReveal}>something hard</Redacted>,
            <br />I want to hear about it.
          </h2>

          <div className="flex gap-12 opacity-0">
            {[
              { label: 'GitHub', href: 'https://github.com/arduvey29' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/aaradhy-duvey' },
              {
                label: 'Email',
                href: 'mailto:rajasharma010704@gmail.com',
              },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="font-courier text-[16px] text-ink-secondary hover:text-ink transition-colors duration-150 group relative"
              >
                {label}
                <span className="absolute bottom-0 left-0 h-px bg-ink w-0 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-content px-16">
        <div className="h-px bg-rule mb-4" />
        <span className="font-courier text-[11px] text-ink-tertiary tracking-label">
          Aaradhy Raghav Duvey · Jaipur · 2026
        </span>
      </div>
    </section>
  )
}
