import ThemeSiteWrapper from '@/components/themeSiteWrapper'
import SubsitePage from '@/components/subsitePage'
import Timeline from '@/components/timeline'

export default function AboutPage({ aboutPages, about }) {
  let siteContent = ''

  if (about?._type === 'subsite') {
    siteContent = <SubsitePage subsiteContent={about} />
  } else {
    siteContent = <Timeline abschnitte={about} />
  }

  return (
    <ThemeSiteWrapper themenListe={aboutPages.subsites} siteContent={siteContent} slug={about.slug.current}
                      slugprefix={'about'} />
  )
}
