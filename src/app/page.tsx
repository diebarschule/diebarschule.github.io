import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { loadCaseStudies } from '@/lib/mdx'
import { Termine } from '@/components/Termine'

const clients = [
  ['Lamm Bar, Prenzlauer Berg, seit 2019'],
  ['Lab, Kreuzberg, seit 2019'],
  ['Bademeister, Weissensee, seit 2021'],
  ['Stück, Kreuzberg, seit 2021'],
  ['Torte, Neukölln, seit 2023'],
  ['Nonno, Schöneberg, seit 2023'],
  ['Pannierstraße 57, Neukölln, seit 2024'],
  ['More to come...'],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Unsere Bars in Berlin
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <p className='text-xl text-white font-bold'>{client}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Die Barschule Berlin besser jehts nit!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Wir sind eine Barschule in Berlin und bieten Kurse für Anfänger und Fortgeschrittene an. Unsere Kurse sind für alle Altersgruppen und Niveaus geeignet. Wir bieten eine Vielzahl von Kursen an, die von Grundlagenkursen bis hin zu fortgeschrittenen Kursen reichen. Unsere Kurse sind so konzipiert, dass sie Spaß machen und gleichzeitig lehrreich sind. Wir haben erfahrene Lehrer, die Ihnen helfen, Ihre Fähigkeiten zu verbessern und Ihr Wissen zu erweitern. Wir bieten auch Kurse für Menschen an, die bereits Erfahrung im Bereich Bar haben und ihre Fähigkeiten verbessern möchten. Unsere Kurse sind so konzipiert, dass sie Spaß machen und gleichzeitig lehrreich sind. Wir haben erfahrene Lehrer, die Ihnen helfen, Ihre Fähigkeiten zu verbessern und Ihr Wissen zu erweitern.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Termine />
      <ContactSection />
    </>
  )
}
