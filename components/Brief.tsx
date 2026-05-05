'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Stamp } from '@/components/Stamp'
import { Redacted } from '@/components/Redacted'
import type { BriefData } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface BriefProps {
  brief: BriefData
  index: number
}

export function Brief({ brief, index }: BriefProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 1

  useGSAP(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      }
    )
  }, { scope: cardRef })

  return (
    <div
      ref={cardRef}
      className={`brief-card opacity-0 bg-paper-raised border border-rule p-8 md:p-10 ${
        isEven ? 'brief-even md:ml-[60px] md:max-w-[620px]' : 'md:max-w-[700px]'
      }`}
      style={{ borderRadius: 0 }}
    >
      {/* Card header row */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex items-center gap-6">
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label">
            [BRIEF #{brief.id}]
          </span>
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase">
            DOMAIN: <span>{brief.domain}</span>
          </span>
        </div>
        <Stamp />
      </div>

      {/* Divider rule */}
      <div className="w-full h-px bg-rule mb-6" />

      {/* Subject */}
      <div className="mb-6">
        <span className="font-courier text-[11px] text-ink-tertiary tracking-wide uppercase block mb-2">
          SUBJECT:
        </span>
        <h3 className="font-cormorant font-semibold text-[30px] text-ink leading-[1.15]">
          {brief.subject}
        </h3>
      </div>

      {/* Assessment */}
      <div className="mb-6">
        <span className="font-courier text-[11px] text-ink-tertiary tracking-wide uppercase block mb-2">
          ASSESSMENT:
        </span>
        <p className="font-baskerville text-[15px] text-ink-secondary leading-[1.75]">
          {brief.hasRedaction ? (
            <>
              The problem isn&apos;t encryption — it&apos;s that no domestic alternative existed
              that could pass operational scrutiny. SurakshaNet was built for Smart India Hackathon
              2025 to be that alternative. Features include remote wipe,{' '}
              <Redacted>Chameleon Mode</Redacted>, and real-time OPSEC scanning.
            </>
          ) : (
            brief.assessment
          )}
        </p>
      </div>

      {/* Impact */}
      <div className="mb-6">
        <span className="font-courier text-[11px] text-ink-tertiary tracking-wide uppercase block mb-2">
          OPERATIONAL IMPACT:
        </span>
        <div className="flex items-baseline gap-4">
          {brief.impact.number ? (
            <span className="font-cormorant font-bold text-[56px] text-stamp-red leading-none">
              {brief.impact.number}
            </span>
          ) : (
            <span className="font-cormorant font-semibold text-[24px] text-ink leading-tight">
              —
            </span>
          )}
          <span className="font-courier text-[12px] text-ink-secondary leading-[1.6] max-w-[380px]">
            {brief.impact.caption}
          </span>
        </div>
      </div>

      {/* Systems */}
      <div className="mb-5">
        <span className="font-courier text-[11px] text-ink-tertiary tracking-wide uppercase block mb-1">
          SYSTEMS DEPLOYED:
        </span>
        <span className="font-courier text-[12px] text-ink-tertiary">
          {brief.systems.join(' · ')}
        </span>
      </div>

      {/* Source */}
      <div>
        <span className="font-courier text-[11px] text-ink-tertiary tracking-wide uppercase block mb-1">
          SOURCE:
        </span>
        {brief.source.href ? (
          <a
            href={brief.source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-courier text-[12px] text-ink-secondary hover:text-ink transition-colors duration-150"
          >
            <span aria-hidden="true">→ </span>
            <span>{brief.source.label}</span>
          </a>
        ) : (
          <span className="font-courier text-[12px] text-ink-tertiary italic">
            {brief.source.label}
          </span>
        )}
      </div>
    </div>
  )
}
