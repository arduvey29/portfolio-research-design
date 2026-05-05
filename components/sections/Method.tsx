'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Redacted } from '@/components/Redacted'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Method() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.method-label',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out', scrollTrigger: { trigger: '.method-label', start: 'top 85%' } }
      )
      gsap.fromTo(
        '.method-rule',
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.method-rule', start: 'top 85%' } }
      )
      gsap.fromTo(
        '.method-heading',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: '.method-heading', start: 'top 85%' } }
      )
      gsap.fromTo(
        '.method-body > *',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.method-body', start: 'top 80%' } }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} id="method" className="relative py-20 md:py-[140px]">
      <div
        className="absolute top-0 bottom-0 bg-rule hidden lg:block"
        style={{ left: 'calc(50% - 550px + 64px)', width: '1px' }}
      />

      <div className="max-w-content mx-auto px-16">
        <div className="max-w-[640px]">
          <div className="method-label flex items-center gap-4 mb-6 opacity-0">
            <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase">
              02 / The Method
            </span>
          </div>

          <div className="method-rule h-px bg-rule mb-2 origin-left" />
          <span className="font-courier text-[11px] text-ink-tertiary tracking-label uppercase block mb-2">
            Analyst Note:
          </span>
          <div className="h-px bg-rule mb-10" />

          <h2 className="method-heading font-cormorant font-semibold text-[52px] text-ink leading-[1.05] mb-10 opacity-0">
            I don&apos;t solve problems.
            <br />I find the ones no one noticed.
          </h2>

          <div className="method-body flex flex-col gap-6">
            <p className="font-baskerville text-[17px] text-ink-secondary leading-[1.8]">
              Most developers are handed a spec. I&apos;ve never worked that way. Every system
              I&apos;ve shipped started with{' '}
              <Redacted>a specific moment of</Redacted> noticing — a workflow that was quietly
              broken, a tool that should have existed, a gap so obvious in hindsight that people
              assume someone else is already solving it.
            </p>

            <p className="font-baskerville text-[17px] text-ink-secondary leading-[1.8]">
              I&apos;m not faster or more disciplined than other engineers. I&apos;m just the
              person who stops and asks: <em className="text-ink">why does this still require a human?</em>
            </p>

            <blockquote className="border-l-[3px] border-stamp-red pl-5 py-1">
              <p className="font-baskerville italic text-[17px] text-ink leading-[1.8]">
                &ldquo;Why does this still require a human?&rdquo;
              </p>
            </blockquote>

            <p className="font-baskerville text-[17px] text-ink-secondary leading-[1.8]">
              Six cases below. Each one started with that question.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
