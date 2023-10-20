import Container from '@/components/container'
import ThemeSwitch from '@/components/themeSwitch'

export default function Footer(props) {
  return (
    <Container
      className='flex flex-col justify-between lg:flex-row mt-10 border-t border-gray-100 dark:border-gray-800'>
      <div className={'flex flex-col mt-4'}>
        <div>
          <div className='text-left text-sm'>
            Copyright © {new Date().getFullYear()} {props?.copyright}. All
            rights reserved.
          </div>
          <div className='mt-1 gap-1 text-center lg:text-left text-sm text-gray-500 dark:text-gray-600'>
        <span>
          {' '}
          Made by{' '}
          <a
            href='https://lucasprabant.com'
            rel='noopener'
            target='_blank'>
            Lucas Prabant
          </a>
        </span>
            <span>&middot;</span>
            <span>
          {' '}
              <a
                href='https://github.com/luciwien'
                rel='noopener'
                target='_blank'>
            Github
          </a>
        </span>
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <div className='mt-5'>
            </div>
          </div>

        </div>
        <ThemeSwitch ></ThemeSwitch>
      </div>
      <div className={'mt-4'}>
        <h3 className={'text-lg font-light text-gray-500 dark:text-gray-600'}>Content</h3>
        <ul className='text-sm font-medium '>
          <li><a href={'/about'} rel='noopener' target='_blank'>Über uns</a></li>
          <li><a href={'/about'} rel='noopener' target='_blank'>Bibliothek</a></li>
          <li><a href={'/about'} rel='noopener' target='_blank'>Events</a></li>
        </ul>
      </div>
      <div className={'mt-4'}>
        <h3 className={'text-lg font-light text-gray-500 dark:text-gray-600'}>Legal & Other</h3>
        <ul className='text-sm font-medium '>
          <li><a href={'/about'} rel='noopener' target='_blank'>Kontakt</a></li>
          <li><a href={'/about'} rel='noopener' target='_blank'>Mitglied Werden</a></li>
          <li><a href={'/about'} rel='noopener' target='_blank'>Impressum & Datenschutz</a></li>
        </ul>
      </div>
      {/*<ThemeSwitch />*/}

    </Container>
  )
}