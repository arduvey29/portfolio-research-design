'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brief } from '@/components/Brief'
import { briefs } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Cases() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.cases-header > *',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.cases-header', start: 'top 85%' },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="cases" className="relative py-20 md:py-[140px]">
      <div
        className="absolute top-0 bottom-0 bg-rule hidden lg:block"
        style={{ left: 'calc(50% - 550px + 64px)', width: '1px' }}
      />

      <div className="max-w-content mx-auto px-16">
        <div className="cases-header mb-16 max-w-[640px]">
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-4 opacity-0">
            03 / Cases
          </span>
          <div className="h-px bg-rule mb-3 opacity-0" />
          <h2 className="font-cormorant font-semibold text-[52px] text-ink leading-[1.05] opacity-0">
            Six briefs. Six gaps.
          </h2>
          <div className="h-px bg-rule mt-3 opacity-0" />
        </div>

        <div className="flex flex-col gap-[72px] pl-10">
          {briefs.map((brief, index) => (
            <div key={brief.id} className="relative">
              <div
                className="absolute top-10 bg-paper border border-rule rounded-full hidden lg:block"
                style={{
                  left: 'calc(-2.5rem - 4px)',
                  width: '8px',
                  height: '8px',
                }}
              />
              <div
                className="absolute top-[42px] bg-rule hidden lg:block"
                style={{
                  left: 'calc(-2.5rem)',
                  width: '2.5rem',
                  height: '1px',
                }}
              />
              <Brief brief={brief} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
