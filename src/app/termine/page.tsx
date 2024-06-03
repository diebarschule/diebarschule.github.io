import { type Metadata } from 'next'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'

function CaseStudies({}: {}) {
  const events = [
    {
      title: 'Einstiegskurs Barkunde',
      date: '01-07-2024',
      service: 'Barkunde und Mixologie',
      content: 'A new website for Phobia',

      summary: [
        'Hier lernt ihr die Grundlagen der Barkunde und Mixologie. Wir zeigen euch wie ihr die besten Cocktails mixt und wie ihr eure Gäste begeistert.',
        'Wir bereiten euch auf euren nächsten Cocktailabend vor und zeigen euch die besten Tricks und Kniffe.',
      ],
    },
    {
      title: 'Einstiegskurs Barkunde',
      date: '01-08-2024',
      service: 'Barkunde und Mixologie',
      content: 'A new website for Phobia',

      summary: [
        'Hier lernt ihr die Grundlagen der Barkunde und Mixologie. Wir zeigen euch wie ihr die besten Cocktails mixt und wie ihr eure Gäste begeistert.',
        'Wir bereiten euch auf euren nächsten Cocktailabend vor und zeigen euch die besten Tricks und Kniffe.',
      ],
    },
    {
      title: 'Einstiegskurs Barkunde',
      date: '01-09-2024',
      service: 'Barkunde und Mixologie',
      content: 'A new website for Phobia',

      summary: [
        'Hier lernt ihr die Grundlagen der Barkunde und Mixologie. Wir zeigen euch wie ihr die besten Cocktails mixt und wie ihr eure Gäste begeistert.',
        'Wir bereiten euch auf euren nächsten Cocktailabend vor und zeigen euch die besten Tricks und Kniffe.',
      ],
    },
  ]
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Aktuelle Termine
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {events.map((event) => (
          <FadeIn key={event.title}>
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
                      {event.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={event.date}>
                        {formatDate(event.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={event.title}>{event.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {event.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
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
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Termine"
        title="Wir bieten euch monatlich mehrere Termine an um euch die Möglichkeit zu geben, uns und unsere Arbeit kennenzulernen. Wir freuen uns auf euch!"
      >
        <p>
          Zu unseren Kursen können maximal 10 Personen teilnehmen. Die Kurse
          finden in unserem Studio in der Musterstraße 123 statt. Die Kurse sind
          für Anfänger und Fortgeschrittene geeignet. Wir freuen uns auf euch!{' '}
        </p>
      </PageIntro>

      <CaseStudies />

      <ContactSection />
    </>
  )
}
