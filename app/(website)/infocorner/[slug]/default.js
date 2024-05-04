// import Container from '@/components/container'
import {parseISO, format} from "date-fns";
import  deLocale from 'date-fns/locale/de'


import { PortableText } from '@/lib/sanity/plugins/portabletext'
import ThemeSiteWrapper from '@/components/themeSiteWrapper'

export default function InfocornerPage({ infocornerPages, infocorner }) {
  const date = format(parseISO(infocorner?.publishedAt), 'MMMM yyyy', { locale: deLocale })

  const siteContent =
    <>
        <h1 className={'font-serif text-bm lg:text-bd -mb-6'}>{infocorner?.title?.toUpperCase()}</h1>
        {infocorner && <PortableText value={infocorner.body} />}

        <div className={'font-arial text-sm-arial lg:text-sd-arial'}>
          {`Status: ${date.split(' ')[0]} ${date.split(' ')[1]} · Änderungen an diesen Ansichten bleiben vorbehalten und sind erwünscht. 
                Mit der Zeit nicht dazu lernen, das wäre ein Fehler.`}
        </div>
      </>

  return (
    <ThemeSiteWrapper themenListe={infocornerPages.subsites} siteContent={siteContent} slug={infocorner.slug.current}
                      slugprefix={'infocorner'} />
  )
}
