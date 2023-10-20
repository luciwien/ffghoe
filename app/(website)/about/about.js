import Container from '@/components/container'
import { urlForImage } from '@/lib/sanity/image'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@/lib/sanity/plugins/portabletext'

export default function About({ authors, settings, about }) {
  console.log("hgelllllll")
  console.log(about)
  return (
    <Container>
      <h1
        className='text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug'>
        {about.title}
      </h1>
      <div className='text-center'>
        <p className='text-lg'>{about.subtitle}</p>
      </div>

      {/*<div className='mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16'>*/}
      {/*  {authors.slice(0, 3).map(author => {*/}
      {/*    const imageProps = urlForImage(author?.image) || null*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        key={author._id}*/}
      {/*        className='relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16'>*/}
      {/*        <Link href={`/author/${author?.slug}`}>*/}
      {/*          {imageProps && (*/}
      {/*            <Image*/}
      {/*              src={imageProps?.src}*/}
      {/*              alt={author?.name || ' '}*/}
      {/*              fill*/}
      {/*              sizes='(max-width: 320px) 100vw, 320px'*/}
      {/*              className='object-cover'*/}
      {/*            />*/}
      {/*          )}*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</div>*/}

      <div className='prose mx-auto mt-14 text-center dark:prose-invert'>
        <PortableText value={about.beschreibung} />
        <p>
          <Link href='/contact'>Schreib uns eine Nachricht</Link>
          <Link href='/antrag'>oder werde Mitglied</Link>
        </p>
      </div>
    </Container>
  )
}
