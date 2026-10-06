import Link from 'next/link'
import Container from '@/components/container'
import PostList from '@/components/postlist'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity/image'
import { PhotoIcon } from "@heroicons/react/24/outline";

import { parseISO, format } from 'date-fns';

export default function LandingPage({ landingPage }) {
  const posts = landingPage.articles
  const topics = landingPage.subsites
  const events = landingPage.events
console.log(events[0])
  return (<>
      <div >
        <Container>
          <div className={'flex flex-col justify-evenly align-around lg:h-64'}>
            <h1
              className={'mt-2 mb-3 text-3xl text-center font-semibold tracking-tight lg:leading-snug text-brand-primary lg:text-4xl '}>{landingPage.title}</h1>
            <p className={'text-center text-lg'}>{landingPage.subtitle}</p>
            <div>
            <Link href="mitglied-werden"
           className=' mt-5 flex justify-around md:hidden  px-5 py-2 text-sm rounded-md font-bold bg-pink-800 text-white hover:bg-pink-600' >
                          Mitglied werden
                        </Link> 
            </div>
          </div>
           
        </Container>
      </div>
      <Container>

        <div className={'lg:max-w-screen-lg max-h-48 lg:mt-12'}>
          <h1
            className={'mt-2 mb-3 text-3xl font-light text-center tracking-tight lg:leading-snug text-brand-primary lg:text-4xl '}>Blog</h1>
        </div>

        {posts && (<>
            <div className='mt-10 grid gap-10 md:grid-cols-3 lg:gap-10 xl:grid-cols-3 '>
              {posts.map(post => (
                <PostList key={post._id} post={post} aspect='square' />
              ))}
            </div>
            <div className='mt-10 flex justify-center'>
              <Link
                href='/blog'
                className='relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 '>
                <span>Mehr in unserem Blog</span>
              </Link>
            </div>
          </>
        )}
      </Container>
       <Container>

        <div className={'lg:max-w-screen-lg max-h-48 lg:mt-12'}>
          <h1
            className={'mt-2 mb-3 text-3xl font-light text-center tracking-tight lg:leading-snug text-brand-primary lg:text-4xl '}>Termine</h1>
        </div>
        <div className={'flex flex-col w-full divide-y'}>
          {events && events.map( (event,index) => (
            <EventRow key={index} event={event} />
          ))}
      </div>
      </Container>
      <Container>
        {topics && (<>
            <div className='flex'>
              {topics.map(topic => (
                <div key={topic.title} className={' flex lg:flex-row overflow-hidden rounded-md "'}>
                  <div className='py-6 lg:py-0 w-full flex flex-col items-center justify-between gap-1'>
                    <div>
                      <h1
                        className={'mt-2 mb-3 text-3xl font-semibold tracking-tight text-left lg:leading-snug text-brand-primary lg:text-4xl '}>{topic.title}</h1>
                      <p className={'text-left text-lg'}>{topic.description}</p>
                    </div>
                    <div className='mt-10 flex items-end justify-center'>
                      <Link
                        href={topic.link}
                        className='relative inline-flex items-center gap-1 rounded-md border border-pink-700 bg-white px-3 py-2 pl-4 text-sm font-medium text-pink-700 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 '>
                        <span>Erfahre mehr!</span>
                      </Link>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </>
        )}
      </Container>

      <Container>

      </Container>
    </>
  )
}



export const EventRow = ({event}) => {
  return (
    <div className={'flex flex-row items-center border-separate my-2 py-3'} >
      <div className={'flex flex-col mr-10  font-light text-xl'}>
          <span className={'text-center'}>
                {format(
                  parseISO(
                    event?.date
                  ),
                  'dd.MM'
                )}
                </span>
        <span className={'text-center'}>
                {format(
                  parseISO(
                    event?.date
                  ),
                  'yyyy'
                )}
                </span>
      </div>
      <div className={'flex flex-col items-stretch flex-grow'}>
        <h2 className={'text-2xl font-light'}>{event.title}</h2>
        <p className={'text-sm font-light'}>{event.description}</p>
      </div>
    </div>
  )

}
