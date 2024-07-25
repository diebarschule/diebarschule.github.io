'use client'
import { type Metadata } from 'next'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { events } from '@/constants/constants'

function Events({}: {}) {


  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Aktuelle Termine
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {events.map((event, index) => (
          <FadeIn key={index}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {event.title}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {event.type}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={event.date}>
                        {event.date}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {event.description}
                  </p>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Termine',
  description:
    'Wir bieten euch monatlich mehrere Termine an um euch die Möglichkeit zu geben, uns und unsere Arbeit kennenzulernen. Wir freuen uns auf euch!',
}

export default async function Termine() {
  return (
    <>
      <PageIntro
        eyebrow="Termine"
        title="Wir bieten euch monatlich mehrere Termine an um euch die Möglichkeit zu geben, uns und unsere Arbeit kennenzulernen. Wir freuen uns auf euch!"
      >
        <p>
          Unsere Kurse finden regulär immer Montagabend von 18 Uhr bis ca. 19:30
          Uhr statt, danach gibt es noch ein entspanntes get together vor Ort.
          Solltest du ein/-e Mitarbeiter*in sein, bedarf es keiner Anmeldung,
          komm einfach vorbei! Falls du in einer anderen Bar arbeitest und gerne
          mal bei uns reinschauen würdest, sende uns bitte eine Anfrage. Die
          Kurse finden in der Pannierstraße 57, 12047 Berlin statt. Wir freuen
          uns auf euch! Bitte besucht diese Seite regelmäßig, um über unsere
          aktuellen Termine auf dem Laufenden zu bleiben.
        </p>
      </PageIntro>
      <Events />
      <ContactSection />
    </>
  )
}

export {Termine}
