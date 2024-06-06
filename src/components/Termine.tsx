'use client'
import { Container } from './Container'
import { FadeInStagger, FadeIn } from './FadeIn'
import { SectionIntro } from './SectionIntro'


function Termine() {
  const events = [
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
      description
        : 'Was ist guter Service? - Werdet Profis in unseren Serviceabläufen.',
    },
    {
      title: 'Lektion 3',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'How to stock it? - Bereitet euch den Barbereich optimal vor.',
    },
    {
      title: 'Lektion 4',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'How to tend it? - Lernt die Techniken und das Verhalten an der Bar kennen.',
    },
    {
      title: 'Lektion 5',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'How to create? - Entwerft eure eigenen Drinks.',
    },
    {
      title: 'Lektion 6',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'Wodka, Gin und Korn - Klare Sache..',
    },
    {
      title: 'Lektion 7',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'R(h)um, Chachaca, Mezcal und Tequila - Spirituosen aus der Karibik und Lateinamerika.',
    },
    {
      title: 'Lektion 8',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'Whisk(e)y - uisge beatha.',
    },
    {
      title: 'Lektion 9',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : ' Wein, Schaum- und Perlwein - in vino veritas.',
    },
    {
      title: 'Lektion 10',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : ' Bier und Craft Beer - Hopfen und Malz, Gott erhalt`s.',
    },
    {
      title: 'Lektion 11',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'Liköre und sonstige Spirituosen - eine Übersicht.',
    },
    {
      title: 'Lektion 12',
      date: '24-06-2024',
        type: 'Workshop',
      description
        : 'How to manage? - Lernt ein Team zu führen und eine Bar eigenständig zu managen.',
    },
  ]
  const currentDate = new Date();
  const futureEvents = events.filter(event => {
    const eventDate = new Date(event.date.split('-').reverse().join('-'));
    return eventDate >= currentDate;
  });
  return (
    <>
      <SectionIntro
        title="Was erwartet euch?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          In unseren ingesamt zwölf Lektionen, die ihr nach dem Fahrschul-Konzept durchlaufen werdet, schulen wir euch zu echten Bar-Allrounder*innen. Sei es im Service, Arbeit am Tresen, Spirituosenkunde, Konfliktlösung oder Bar-Management, wir möchten euch in allen Bereichen zu Fachmenschen ausbilden und dabei natürlich auch von euch lernen!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {futureEvents.map((event: any) => (
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
