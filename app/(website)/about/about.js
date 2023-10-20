import Container from '@/components/container'
import { urlForImage } from '@/lib/sanity/image'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@/lib/sanity/plugins/portabletext'

export default function About({ authors, settings, about }) {
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

      <div className='prose mx-auto mt-14 text-center dark:prose-invert'>
        {
          about.beschreibung ? <PortableText value={about.beschreibung} /> : "empty"
        }
        <p>
          <Link href='/contact'>Schreib uns eine Nachricht</Link>
          <Link href='/antrag'>oder werde Mitglied</Link>
        </p>
      </div>
    </Container>
  )
}
