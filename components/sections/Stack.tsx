'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stackGroups } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Stack() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.stack-header > *',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stack-header', start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.stack-group',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stack-grid', start: 'top 80%' },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="stack" className="relative py-20 md:py-[140px]">
      <div
        className="absolute top-0 bg-rule hidden lg:block"
        style={{
          left: 'calc(50% - 550px + 64px)',
          width: '1px',
          bottom: '0',
        }}
      />

      <div className="max-w-content mx-auto px-16">
        <div className="stack-header mb-14">
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-4 opacity-0">
            05 / Stack
          </span>
          <div className="h-px bg-rule mb-3 opacity-0" />
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-3 opacity-0">
            Appendix B: Technical Capability
          </span>
          <div className="h-px bg-rule mb-6 opacity-0" />
          <h2 className="font-cormorant font-semibold text-[52px] text-ink leading-[1.05] opacity-0">
            What I build with.
          </h2>
        </div>

        <div className="stack-grid grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
          {stackGroups.map((group, i) => (
            <div key={i} className="stack-group opacity-0">
              <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-1">
                {group.label}
              </span>
              <div className="h-px bg-rule mb-4" />
              <ul className="flex flex-col">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="font-baskerville text-[16px] text-ink py-2.5 border-b border-paper-deep last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
