// import Container from '@/components/container'
import {parseISO, format} from "date-fns";
import  deLocale from 'date-fns/locale/de'
// import Image from 'next/image'
// import Link from 'next/link'
import { PortableText } from '@/lib/sanity/plugins/portabletext'
import ThemeSiteWrapper from '@/components/themeSiteWrapper'

export default function AboutPage({ aboutPages, about }) {
  const date = format(parseISO(about?.publishedAt), 'MMMM yyyy', { locale: deLocale })

  const siteContent =
    <>
        <h1 className={'font-serif text-bm lg:text-bd -mb-6'}>{about?.title?.toUpperCase()}</h1>
        {about && <PortableText value={about.body} />}

        <div className={'font-arial text-sm-arial lg:text-sd-arial'}>
          {`Status: ${date.split(' ')[0]} ${date.split(' ')[1]} · Änderungen an diesen Ansichten bleiben vorbehalten und sind erwünscht. 
                Mit der Zeit nicht dazu lernen, das wäre ein Fehler.`}
        </div>
      </>

  return (
    <ThemeSiteWrapper themenListe={aboutPages.subsites} siteContent={siteContent} slug={about.slug.current}
                      slugprefix={'about'} />
  )
}
