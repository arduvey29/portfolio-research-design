'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { competitionEntries, researchPapers } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Signal() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.signal-header > *',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.signal-header', start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.competition-entry',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.competition-list', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.paper-card',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.papers-list', start: 'top 80%' },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="signal" className="relative py-20 md:py-[140px]">
      <div
        className="absolute top-0 bottom-0 bg-rule hidden lg:block"
        style={{ left: 'calc(50% - 550px + 64px)', width: '1px' }}
      />

      <div className="max-w-content mx-auto px-16">
        <div className="signal-header mb-14">
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-4 opacity-0">
            04 / Signal
          </span>
          <div className="h-px bg-rule mb-3 origin-left opacity-0" />
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-3 opacity-0">
            Appendix A: External Validation
          </span>
          <div className="h-px bg-rule mb-6 opacity-0" />
          <h2 className="font-cormorant font-semibold text-[52px] text-ink leading-[1.05] mb-4 opacity-0">
            When others validated the gaps.
          </h2>
          <p className="font-baskerville text-[17px] text-ink-secondary leading-[1.8] max-w-[640px] opacity-0">
            IIT hackathon judges, peer-reviewed journals, and national selection panels
            independently reached the same conclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-4">
              Competition Record
            </span>
            <div className="competition-list">
              {competitionEntries.map((entry, i) => (
                <div
                  key={i}
                  className="competition-entry py-5 border-b border-rule opacity-0 last:border-b-0"
                >
                  <div
                    className={`font-cormorant font-bold text-[18px] leading-tight mb-1 ${
                      entry.isPodium ? 'text-stamp-red' : 'text-ink'
                    }`}
                  >
                    {entry.placement}
                  </div>
                  <div className="font-baskerville text-[16px] text-ink mb-1">
                    {entry.event}
                  </div>
                  <div className="font-courier text-[13px] text-ink-tertiary">
                    {entry.institution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-4">
              Published Research
            </span>
            <div className="papers-list flex flex-col gap-4">
              {researchPapers.map((paper, i) => (
                <div
                  key={i}
                  className="paper-card bg-paper-raised border border-rule p-8 opacity-0"
                  style={{ borderRadius: 0 }}
                >
                  <span className="font-special-elite text-[12px] text-stamp-red block mb-3">
                    {paper.role}
                  </span>
                  <p className="font-cormorant font-semibold text-[17px] text-ink leading-[1.4] mb-3">
                    {paper.title}
                  </p>
                  <span className="font-courier text-[13px] text-ink-tertiary">
                    {paper.journal} · {paper.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
