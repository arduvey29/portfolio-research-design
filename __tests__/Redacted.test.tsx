import { render, screen, fireEvent } from '@testing-library/react'
import { Redacted } from '@/components/Redacted'

describe('Redacted', () => {
  test('renders accessible text', () => {
    render(<Redacted>something hard</Redacted>)
    expect(screen.getByLabelText('something hard')).toBeInTheDocument()
  })

  test('shows redacted state by default', () => {
    render(<Redacted>something hard</Redacted>)
    const text = screen.getByText('something hard')
    expect(text).toHaveClass('opacity-0')
  })

  test('reveals text on mouse enter', () => {
    render(<Redacted>something hard</Redacted>)
    const container = screen.getByLabelText('something hard')
    fireEvent.mouseEnter(container)
    const text = screen.getByText('something hard')
    expect(text).toHaveClass('opacity-100')
  })

  test('hides text again on mouse leave', () => {
    render(<Redacted>something hard</Redacted>)
    const container = screen.getByLabelText('something hard')
    fireEvent.mouseEnter(container)
    fireEvent.mouseLeave(container)
    const text = screen.getByText('something hard')
    expect(text).toHaveClass('opacity-0')
  })

  test('autoReveal shows text without interaction', () => {
    render(<Redacted autoReveal>something hard</Redacted>)
    const text = screen.getByText('something hard')
    expect(text).toHaveClass('opacity-100')
  })
})
