'use client'

export function SocialLinks() {
  return (
    <div className="fixed bottom-10 right-16 z-50 flex gap-5">
      {[
        { label: 'GITHUB', href: 'https://github.com/arduvey29' },
        { label: 'LINKEDIN', href: 'https://linkedin.com/in/aaradhy-duvey' },
        { label: 'EMAIL', href: 'mailto:rajasharma010704@gmail.com' },
      ].map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="font-courier text-[11px] text-ink-tertiary hover:text-ink transition-colors duration-150 tracking-label"
        >
          {label}
        </a>
      ))}
    </div>
  )
}
