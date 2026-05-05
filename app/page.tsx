import { Hero } from '@/components/sections/Hero'
import { Method } from '@/components/sections/Method'
import { Cases } from '@/components/sections/Cases'
import { Signal } from '@/components/sections/Signal'
import { Stack } from '@/components/sections/Stack'
import { Contact } from '@/components/sections/Contact'
import { SocialLinks } from '@/components/SocialLinks'

export default function Home() {
  return (
    <main>
      <Hero />
      <Method />
      <Cases />
      <Signal />
      <Stack />
      <Contact />
      <SocialLinks />
    </main>
  )
}
