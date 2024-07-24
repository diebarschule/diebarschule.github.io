'use client'
import { type Metadata } from 'next'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { useEffect, useState } from 'react'

function Events({}: {}) {
  const initialEvents = [
    {
      title: 'Lektion 1',
      date: '17-06-2024',
      type: 'Workshop',
      description: 'Wir über uns - lernt unser Unternehmen kennen.',
    },
    {
      title: 'Lektion 2',
      date: '24-06-2024',
      type: 'Workshop',
      description: 'Was ist guter Service? - Werdet Profis in unseren Serviceabläufen.',
    },
    {
      title: 'Lektion 3',
      date: '01-07-2024',
      type: 'Workshop',
      description: 'How to stock it? - Bereitet euch den Barbereich optimal vor.',
    },
    {
      title: 'Lektion 4',
      date: '08-07-2024',
      type: 'Workshop',
      description: 'How to tend it? - Lernt die Techniken und das Verhalten an der Bar kennen.',
    },
    {
      title: 'Lektion 5',
      date: '15-07-2024',
      type: 'Workshop',
      description: 'How to create? - Entwerft eure eigenen Drinks.',
    },
    {
      title: 'Lektion 6',
      date: '22-07-2024',
      type: 'Workshop',
      description: 'Wodka, Gin und Korn - Klare Sache..',
    },
    {
      title: 'Lektion 7',
      date: '29-07-2024',
      type: 'Workshop',
      description: 'R(h)um, Chachaca, Mezcal und Tequila - Spirituosen aus der Karibik und Lateinamerika.',
    },
    {
      title: 'Lektion 8',
      date: '05-08-2024',
      type: 'Workshop',
      description: 'Whisk(e)y - uisge beatha.',
    },
    {
      title: 'Lektion 9',
      date: '12-08-2024',
      type: 'Workshop',
      description: ' Wein, Schaum- und Perlwein - in vino veritas.',
    },
    {
      title: 'Lektion 10',
      date: '19-08-2024',
      type: 'Workshop',
      description: ' Bier und Craft Beer - Hopfen und Malz, Gott erhalt`s.',
    },
    {
      title: 'Lektion 11',
      date: '26-08-2024',
      type: 'Workshop',
      description: 'Liköre und sonstige Spirituosen - eine Übersicht.',
    },
    {
      title: 'Lektion 12',
      date: '02-09-2024',
      type: 'Workshop',
      description: 'How to manage? - Lernt ein Team zu führen und eine Bar eigenständig zu managen.',
    },
  ]

  const currentDate = new Date();

  // Function to get the next Tuesday from a given date
  const getNextTuesday = (date: any) => {
    const nextTuesday = new Date(date);
    nextTuesday.setDate(nextTuesday.getDate() + ((2 - nextTuesday.getDay() + 7) % 7 || 7));
    return nextTuesday;
  };

  // Function to format date as dd-mm-yyyy
  const formatDate = (date: any) => {
    const d = new Date(date);
    const day = (`0${d.getDate()}`).slice(-2);
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to generate future event dates while maintaining order
  const generateFutureEvents = (events: any, currentDate: any) => {
    let futureEvents = [...events];
    let lastDate = new Date(currentDate);

    // Move past events to the end of the list with new dates
    for (let i = 0; i < futureEvents.length; i++) {
      let eventDate = new Date(futureEvents[i].date.split('-').reverse().join('-'));

      if (eventDate < currentDate) {
        // Get the last event's date in the future events list
        const lastEventDate = new Date(futureEvents[futureEvents.length - 1].date.split('-').reverse().join('-'));
        eventDate = getNextTuesday(lastEventDate);

        futureEvents.push({
          ...futureEvents[i],
          date: formatDate(eventDate)
        });

        // Remove the past event
        futureEvents.splice(i, 1);
        i--; // Adjust the index to account for the removed item
      }
    }

    return futureEvents.slice(0, 12);
  };

  const upcomingEvents = generateFutureEvents(initialEvents, currentDate);

  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Aktuelle Termine
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {upcomingEvents.map((event, index) => (
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
