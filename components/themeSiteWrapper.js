import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import deLocale from 'date-fns/locale/de'

export default function ThemeSiteWrapper({ themenListe, siteContent, slug, slugprefix }) {
  if (!themenListe || !siteContent || !slug ||  !slugprefix) {
    return (<div></div>)
  }

  return (


      <div className={'max-w-screen-lg m-auto flex flex-col lg:flex-row'}>
        <div className={'mt-4 flex flex-col w-full divide-black divide-y-2 lg:w-1/3 lg:pr-5'}>
          <div></div>
          {themenListe?.map((currentThema, index) => {
            return (
              <Link key={index} href={`/${slugprefix}/${currentThema.slug.current}`} className={'flex flex-row py-2'}>
                {/*<div className={'w-2/6'}>*/}
                {/*  <h1 className={'font-arial text-sm-arial lg:text-sd-arial'}>{currentThema.abschnittsnummer}</h1>*/}
                {/*</div>*/}
                <div className={'flex flex-col font-serif text-sm lg:text-sd'}>
                  {slug === currentThema.slug.current ?
                    <h2 className={'font-italic text-sm-italic lg:text-sd-italic'}>{currentThema.title}</h2> :
                    <h2 className={'font-serif text-sm lg:text-sd'}>{currentThema.title}</h2>
                  }
                </div>
              </Link>)
          })}
          <div></div>
        </div>
        <div className={'flex flex-col gap-6 pb-16  lg:w-2/3 mt-4 lg:-mt-2 '}>
          {siteContent}
        </div>
      </div>
    // </div>
  )
}


