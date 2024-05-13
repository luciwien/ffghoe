import ThemeSiteWrapper from '@/components/themeSiteWrapper'
import SubsitePage from '@/components/subsitePage'

export default function InfocornerPage({ infocornerPages, infocorner }) {

  const siteContent = <SubsitePage subsiteContent={infocorner} />

  return (
    <ThemeSiteWrapper themenListe={infocornerPages.subsites} siteContent={siteContent} slug={infocorner.slug.current}
                      slugprefix={'infocorner'} />
  )
}
