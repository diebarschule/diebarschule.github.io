import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'



export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Impressum" title="DieBarschule.">
        <p>Name</p>
        <p>Adresse</p>
        <p>Firma</p>
      </PageIntro>

      <ContactSection />
    </>
  )
}
