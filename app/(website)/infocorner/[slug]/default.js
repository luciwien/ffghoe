import ThemeSiteWrapper from '@/components/themeSiteWrapper'
import SubsitePage from '@/components/subsitePage'
import Timeline from '@/components/timeline'
import HeroesCard from '@/components/heroesCard'

export default function InfocornerPage({ infocornerPages, infocorner, heroes }) {
  let siteContent = ''
  if (infocorner?.slug.current === 'heroes') {
    //render the heroes
    siteContent = <>

      <h1 className={'font-bold text-lg lg:text-xl mb-3'}>QUEER FOOTBALLERS WE LOVE</h1>

      <p>Laut ÖFB gibt es ca. 600.000 Menschen, die in Österreich Fußball spielen. Es ist statistisch gesehen (in etwa
        10% der Menschen sind nicht heterosexuell) sehr unwahrscheinlich, dass keiner der männlichen Fußballer schwul
        ist – weder im Breitensport noch im Profibereich.</p>
      <p>Die meisten haben Angst, offen zu sich zu stehen. Wir wollen euch zeigen:<strong> Ihr seid gut, so wie ihr seid!</strong> Hier
        ein paar prominente Beispiele offen queerer Fußball-Profis:</p>
      <div className='lg:grid lg:grid-cols-2 lg:gap-2'>
        {heroes.map((hero, i) => (<HeroesCard key={i} hero={hero} />))}
      </div>
      <div className={'font-light text-sm lg:text-sm'}>
        {`Status: Mai 2024 · Änderungen an diesen Ansichten bleiben vorbehalten und sind erwünscht. 
                Mit der Zeit nicht dazu lernen, das wäre ein Fehler.`}
      </div>
    </>
  } else if (infocorner?._type === 'subsite') {
    siteContent = <SubsitePage subsiteContent={infocorner} />
  } else {
    siteContent = <Timeline abschnitte={infocorner} />
  }

  return (
    <ThemeSiteWrapper themenListe={infocornerPages.subsites} siteContent={siteContent} slug={infocorner.slug.current}
                      slugprefix={'infocorner'} />
  )
}
