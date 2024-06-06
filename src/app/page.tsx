import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Termine } from '@/components/Termine'

const clients = [
  { name: 'Lamm, Prenzlauer Berg, seit 2019', href: 'https://lammbar.de/' },
  { name: 'Lab, Kreuzberg, seit 2019', href: '#' },
  { name: 'Bademeister, Weissensee, seit 2021', href: 'https://bademeisterbar.de/' },
  { name: 'Stück, Kreuzberg, seit 2021', href: 'https://www.instagram.com/stueck_36/?hl=de' },
  { name: 'Torte, Neukölln, seit 2023', href: 'https://www.torte-bar.de/' },
  { name: 'Nonno, Schöneberg, seit 2023', href: 'https://www.instagram.com/bar.nonno.berlin/' },
  { name: 'Pannierstraße 57, Neukölln, seit 2024', href: '#' },
  { name: 'More to come...', href: '#' },
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
            {clients.map((client) => (
              <li key={client.name}>
                <FadeIn>
                  <a
                    href={client.href}
                    className="text-xl font-bold text-white"
                  >
                    {client.name}
                  </a>
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
  description: 'Wir sind die Barschule.',
}

export default async function Home() {

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Die Barschule - Wir zeigen euch wie Bar geht.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Wir sind Die Barschule in Berlin und möchten unser Wissen darüber,
            wie man zwanglose Gastronomie betreibt, die auf beiden Seiten Spaß
            macht, mit euch teilen. Unsere Kurse richten sich in erster Linie an
            unsere eigenen Mitarbeiter*innen, um ihnen die Möglichkeit zu
            bieten, sich stetig weiterzuentwickeln. Solltet ihr vom Barfach sein
            und wir haben euer Interesse geweckt, schickt uns gerne eine
            Nachricht und wir finden dazu eine Möglichkeit. Auf Anfrage bieten
            wir auch Cocktailkurse für Firmenevents und Heimbartender*innen an.
            Unsere Lektionen sind so konzipiert, dass sie Spaß machen und
            gleichzeitig lehrreich sind.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Termine />
      <ContactSection />
    </>
  )
}
