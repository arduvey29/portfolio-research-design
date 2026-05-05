'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stampReveal } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Stamp() {
  const stampRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!stampRef.current) return
    stampReveal(stampRef.current, stampRef.current)
  }, { scope: stampRef })

  return (
    <span
      ref={stampRef}
      className="font-special-elite text-[13px] text-stamp-red inline-block opacity-0 select-none"
      style={{ transform: 'rotate(-2deg)' }}
      aria-hidden="true"
    >
      DECLASSIFIED ✦
    </span>
  )
}
