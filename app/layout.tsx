import type { Metadata } from 'next'
import { cormorant, libreBaskerville, courierPrime, specialElite } from '@/lib/fonts'
import { LenisProvider } from '@/components/LenisProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aaradhy Raghav Duvey — Systems Engineer',
  description: "I build systems for problems I couldn't find anyone else solving.",
  openGraph: {
    title: 'Aaradhy Raghav Duvey',
    description: "I build systems for problems I couldn't find anyone else solving.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = [
    cormorant.variable,
    libreBaskerville.variable,
    courierPrime.variable,
    specialElite.variable,
  ].join(' ')

  return (
    <html lang="en" className={fontVars}>
      <body className="bg-paper text-ink">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
