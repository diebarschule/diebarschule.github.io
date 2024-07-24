import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Wir machen eure Bar besser!',
}

export default async function About() {

  return (
    <>
      <PageIntro eyebrow="Über uns" title="Wir machen eure Bar besser.">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Wir sind ein Zusammenschluss mehrerer Cocktailbars aus Berlin und haben diese Barschule ins Leben gerufen, um einerseits unsere eigenen Mitarbeiter*innen in ihrer Arbeit in unseren Bars voranzubringen, andererseits um unser Wissen über Gastronomie und Barbetrieb zu teilen.
          </p>
          <p>
          Wir sind stolz auf unsere Mitarbeiter*innen, die einen großartigen Job machen und unsere Gäste immer wieder begeistern können.
          </p>
          <h3>Unser Coach:</h3>
          <p>Unser Bar-Coach Ralf lebt seit 2014 in Berlin und ist seitdem fester Bestandteil der hiesigen Gastro-Szene. Er hat von der urigen Eck-Kneipe bis zum luxuriösen 5-Sterne-Hotel Getränke zubereitet und vor allem auch getrunken, zahllose Bücher über das Barhandwerk gewälzt und bereits an einigen großen Cocktail-Wettbewerben teilgenommen. Seit 2019 ist er bei uns im Unternehmen und konnte in den letzten fünf Jahren einen sehr umfassenden Einblick in Großproduktion sowie Bar- und Servicebetrieb erlangen.</p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label="Bars" />
          <StatListItem value="über 60" label="Angestellte" />
        </StatList>
      </Container>


      <ContactSection />
    </>
  )
}
