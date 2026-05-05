import { vi } from 'vitest'

vi.mock('gsap', () => ({
  default: {
    registerPlugin: vi.fn(),
    fromTo: vi.fn(),
    timeline: vi.fn(() => ({ fromTo: vi.fn(), to: vi.fn() })),
  },
}))

vi.mock('@gsap/react', () => ({
  useGSAP: vi.fn((fn: () => void) => fn()),
}))

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {},
}))

import { render, screen } from '@testing-library/react'
import { Brief } from '@/components/Brief'
import { briefs } from '@/lib/data'

const mockBrief = briefs[0] // SYNAPSE brief

describe('Brief', () => {
  test('renders domain tag', () => {
    render(<Brief brief={mockBrief} index={0} />)
    expect(screen.getByText('DEVOPS AUTOMATION')).toBeInTheDocument()
  })

  test('renders brief id', () => {
    render(<Brief brief={mockBrief} index={0} />)
    expect(screen.getByText(/BRIEF #01/)).toBeInTheDocument()
  })

  test('renders subject', () => {
    render(<Brief brief={mockBrief} index={0} />)
    expect(screen.getByText(mockBrief.subject)).toBeInTheDocument()
  })

  test('renders assessment', () => {
    render(<Brief brief={mockBrief} index={0} />)
    expect(screen.getByText(mockBrief.assessment)).toBeInTheDocument()
  })

  test('renders impact number when present', () => {
    render(<Brief brief={mockBrief} index={0} />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  test('renders source label', () => {
    render(<Brief brief={mockBrief} index={0} />)
    expect(screen.getByText('github.com/arduvey29/SYNAPSE')).toBeInTheDocument()
  })

  test('even-indexed brief gets indent class', () => {
    const { container } = render(<Brief brief={briefs[1]} index={1} />)
    expect(container.firstChild).toHaveClass('brief-even')
  })
})
