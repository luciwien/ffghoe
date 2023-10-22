import Container from '@/components/container'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity/image'
import { parseISO, format } from 'date-fns'

export default function Events({ events }) {
  return (
    <Container>
      <div className={'flex flex-col w-full divide-y'}>
        {events && events.map(event => {
          const imageProps = urlForImage(event.mainImage)
          return (
            <div className={'flex flex-row items-center border-separate my-2 py-3'} key={event._id}>
              <div className={'flex flex-col mr-10  font-light text-xl'}>
                <span className={'text-center'}>
                {format(
                  parseISO(
                    event?.createdAt || event.von
                  ),
                  'dd.MM'
                )}
                </span>
                <span className={'text-center'}>
                {format(
                  parseISO(
                    event?.createdAt || event.von
                  ),
                  'yyyy'
                )}
                </span>
              </div>
              <div className={'flex flex-col items-stretch flex-grow'}>
                <h2 className={'text-2xl font-light'}>{event.title}</h2>
                <h3 className={'text-sm font-light'}>{event.excerpt}</h3>
              </div>
              <div className={"hidden lg:flex lg:relative lg:w-1/4"}>
                {imageProps && (
                  <Image
                    src={imageProps.src}
                    alt={event.mainImage?.alt || 'Thumbnail'}
                    loading='eager'
                    fill
                    sizes='(max-width: 768px) 30vw, 33vw'
                    className='object-contain'
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

