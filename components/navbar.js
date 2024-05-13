'use client'

import { Fragment } from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import Container from '@/components/container'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity/image'
import cx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function Navbar({ settings, aboutPages, qfhPages, infocornerPages }) {
  const menu = [
    {
      label: 'Über uns',
      href: '/about',
      children: aboutPages?.map(page => ({ title: page.title, path: "/about/" + page.slug.current }))
    },
    {
      label: 'Bibliothek',
      href: '/bibliothek'
    },
    {
      label: 'Infocorner',
      href: '/infocorner',
      children: infocornerPages?.map(page => ({ title: page.title, path: "/infocorner/" + page.slug.current }))
    },
    {
      label: 'Queer Football Heroes',
      href: '/queerfootballheroes',
        children: qfhPages?.map(page => ({ title: page.title, path: "/queerfootballheroes/" + page.slug.current }))
    },
    {
      label: 'Kontakt',
      href: '/contact'
    }
  ]

  return (
    <Container>
      <nav className={"md:flex md:justify-between"}>
        <Disclosure>
          {({ open,close }) => (
            <>
              <div className='flex items-start justify-between md:w-auto'>
                <Link href='/' className='w-28 dark:hidden'  onClick={close}>
                  {settings.logo ? (
                    <Image
                      {...urlForImage(settings.logo)}
                      alt='Logo'
                      priority={true}
                      sizes='(max-width: 640px) 100vw, 200px'
                    />
                  ) : (
                    <span className='block text-center'>
                        Stablo
                      </span>
                  )}
                </Link>
                <Link href='/' className='hidden w-28 dark:block' >
                  {settings.logoalt ? (
                    <Image
                      {...urlForImage(settings.logoalt)}
                      alt='Logo'
                      priority={true}
                      sizes='(max-width: 640px) 100vw, 200px'
                    />
                  ) : (
                    <span className='block text-center'>
                        Stablo
                      </span>
                  )}
                </Link>
                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden '>
                  <svg
                    className='h-6 w-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'>
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>
              <div className='flex flex-wrap justify-between md:flex-nowrap md:gap-10'>
                <div
                  className='order-1 hidden w-full flex-col items-center justify-start md:order-none md:w-auto md:flex md:w-auto md:flex-1 md:flex-row md:justify-end'>
                  {menu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                          target={item.external ? '_blank' : ''}
                          rel={item.external ? 'noopener' : ''}
                          >
                          {item.label}
                        </Link>
                      )}
                    </Fragment>

                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className='order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden'>
                  {menu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                          target={item.external ? '_blank' : ''}
                          rel={item.external ? 'noopener' : ''}
                          onClick={close}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  )
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as='div'
      className={cx('relative text-left', mobile && 'w-full')}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              'flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800',
              open
                ? 'text-blue-500 hover:text-blue-500'
                : ' text-gray-600 dark:text-gray-400 ',
              mobile ? 'w-full px-4 py-2 ' : 'inline-block px-4 py-2'
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className='mt-0.5 h-4 w-4' />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='lg:transition lg:ease-out lg:duration-100'
            enterFrom='lg:transform lg:opacity-0 lg:scale-95'
            enterTo='lg:transform lg:opacity-100 lg:scale-100'
            leave='lg:transition lg:ease-in lg:duration-75'
            leaveFrom='lg:transform lg:opacity-100 lg:scale-100'
            leaveTo='lg:transform lg:opacity-0 lg:scale-95'>
            <Menu.Items
              className={cx(
                'z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56',
                !mobile && 'bg-white shadow-lg  dark:bg-gray-800'
              )}>
              <div className={cx(!mobile && 'py-3')}>
                {items.map((item, index) => (
                  <Menu.Item as='div' key={`${item.title}${index}`}>
                    {({ active,close }) => (
                      <Link
                        href={item?.path ? item.path : '#'}
                        className={cx(
                          'flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4',
                          active
                            ? 'text-blue-500'
                            : 'text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300'
                        )} onClick={close}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

