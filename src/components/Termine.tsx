'use client'
import Link from 'next/link'
import { Container } from './Container'
import { FadeInStagger, FadeIn } from './FadeIn'
import { SectionIntro } from './SectionIntro'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Termine() {
/*   const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/calendar/v3/users/me/calendarList',
    )
      .then((response) => response.json())
      .then((data) => setEvents(data.items))
  }, [])

  console.log(events) */

  const events = [
    {
      title: 'Barkeeper Kurs',
      date: '01-07-2024',
      type: 'Kurs',
      description: 'Lerne die Grundlagen des Barkeepings in unserem 3-tägigen Kurs.',
    },
    {
      title: 'Cocktail Workshop',
      date: '01-08-2024',
        type: 'Workshop',
      description
        : 'In unserem Cocktail Workshop lernst du die Kunst des Cocktail Mixens.',
    },

  ]
  return (
    <>
      <SectionIntro
        title="Wir zeigen euch wie Bar geht!"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Wir glauben an die Kraft der Gemeinschaft und daran, dass wir
          gemeinsam mehr erreichen können.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {events.map((event: any) => (
            <FadeIn key={event.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                 
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={event.date}
                    className="font-semibold"
                  >
                    {event.date}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    / {event.type}
                  </span>
                  <span></span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {event.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {event.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export { Termine }
