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
        <p>KbW Gastro GmbH</p>
        <p>Weichselstraße 17</p>
        <p>12045 Berlin</p>
        <p>Inhaber: Dustin Franke</p>
        <p>Amtsgericht Charlottenburg Berlin HRB 196276 B</p>
      </PageIntro>
      <ContactSection />
    </>
  )
}
