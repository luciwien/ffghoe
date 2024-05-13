import ThemeSiteWrapper from '@/components/themeSiteWrapper'
import SubsitePage from '@/components/subsitePage'
import Timeline from '@/components/timeline'

export default function QfhPage({ qfhPages, qfh }) {
  let siteContent = ''

  if (qfh?.slug.current === 'heroes') {
    //render the heroes
    siteContent = "des san de heroes"
  } else if (qfh?._type === 'subsite') {
    siteContent = <SubsitePage subsiteContent={qfh} />
  } else {
    siteContent = <Timeline abschnitte={qfh} />
  }


  return (
    <ThemeSiteWrapper themenListe={qfhPages.subsites} siteContent={siteContent} slug={qfh.slug.current}
                      slugprefix={'queerfootballheroes'} />
  )
}
