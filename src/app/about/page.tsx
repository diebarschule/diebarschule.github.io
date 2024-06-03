import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}



export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Wir sind das beste Barteam in Berlin und haben die besten Bars in Berlin.',
}

export default async function About() {

  return (
    <>
      <PageIntro eyebrow="Über uns" title="Wir machen eure Bar besser.">
        <p>
        Wir sind das beste Barteam in Berlin und haben die besten Bars in Berlin.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
           Unsere erste Bar haben wir 2019 in Prenzlauer Berg eröffnet. Seitdem haben wir unser Team stetig erweitert und sind inzwischen in ganz Berlin vertreten.
          </p>
          <p>
            Wir sind stolz darauf, dass wir die besten Bartender in Berlin haben und unsere Gäste immer wieder begeistern können.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="6" label="Bars" />
          <StatListItem value="52" label="Angestellte" />
        </StatList>
      </Container>


      <ContactSection />
    </>
  )
}
