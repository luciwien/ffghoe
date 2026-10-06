'use client'

import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition, Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react'
import Container from '@/components/container'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity/image'
import cx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function Navbar({ settings, aboutPages, infocornerPages }) {
  const menu = [
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'Über uns',
      href: '/about',
      children: aboutPages?.map(page => ({ title: page.title, path: "/about/" + page.slug.current }))
    },
    {
      label: 'Infocorner',
      href: '/infocorner',
      children: [
        { title: 'Queer Football Heroes', path: '/queerfootballheroes' },
        ...(infocornerPages ?? [])
          .filter(page => page.slug.current !== 'begriffe')
          .map(page => ({ title: page.title, path: "/infocorner/" + page.slug.current }))
      ]
    },
    {
      label: 'Kontakt',
      href: '/contact'
    },
    {
      label: 'Mitglied werden',
      href: '/mitglied-werden',
    },
  ]

  return (
    <Container>
      <nav className={"md:flex md:justify-between"}>
        <Disclosure>
          {({ open,close }) => (
            <>
              <div className='flex items-start justify-between md:w-auto'>
                <Link href='/' className='w-28'  onClick={close}>
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
                <Link href='/' className='hidden w-28' >
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
                <DisclosureButton
                  aria-label='Toggle Menu'
                  className='ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-pink-500 focus:outline-none  md:hidden '>
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
                </DisclosureButton>
              </div>
              <div className='flex flex-wrap justify-between md:flex-nowrap md:gap-10'>
                <div
                  className='order-1 hidden w-full flex-col items-center justify-start md:order-0 md:flex md:w-auto md:flex-1 md:flex-row md:justify-end'>
                  {menu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children} //className='w-full px-3 py-2 text-sm rounded-md font-bold bg-pink-800 text-white'
                        />
                      ) : ( item.label == "Mitglied werden" ? 
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='px-5 py-2 text-sm rounded-md font-bold bg-pink-800 text-white hover:bg-pink-600'
                          target={item.external ? '_blank' : ''}
                          rel={item.external ? 'noopener' : ''}
                          >
                          {item.label}
                        </Link> :
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 '
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
              <DisclosurePanel>
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
                      ) : (item.label == "Mitglied werden" ?
                        <div className='w-full px-2 py-1'>
                          <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='w-full px-3 py-2 text-sm rounded-md font-bold bg-pink-800 text-white'
                          target={item.external ? '_blank' : ''}
                          rel={item.external ? 'noopener' : ''}
                          >
                          {item.label}
                        </Link>
                        </div> : 
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className='w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 '
                          target={item.external ? '_blank' : ''}
                          rel={item.external ? 'noopener' : ''}
                          onClick={close}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </DisclosurePanel>
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
          <MenuButton
            className={cx(
              'flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-pink-500 focus-visible:ring-1 ',
              open
                ? 'text-pink-500 hover:text-pink-500'
                : ' text-gray-600 ',
              mobile ? 'w-full px-4 py-2 ' : 'px-4 py-2'
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className='mt-0.5 h-4 w-4' />
          </MenuButton>
          <Transition
            as={Fragment}
            enter='lg:transition lg:ease-out lg:duration-100'
            enterFrom='lg:transform lg:opacity-0 lg:scale-95'
            enterTo='lg:transform lg:opacity-100 lg:scale-100'
            leave='lg:transition lg:ease-in lg:duration-75'
            leaveFrom='lg:transform lg:opacity-100 lg:scale-100'
            leaveTo='lg:transform lg:opacity-0 lg:scale-95'>
            <MenuItems
              className={cx(
                'z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56',
                !mobile && 'bg-white shadow-lg  '
              )}>
              <div className={cx(!mobile && 'py-3')}>
                {items.map((item, index) => (
                  <MenuItem as='div' key={`${item.title}${index}`}>
                    {({ focus,close }) => ( 
                      <Link
                        href={item?.path ? item.path : '#'}
                        className={cx(
                          'flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4',
                          focus
                            ? 'text-pink-500'
                            : 'text-gray-700 hover:text-pink-500 focus:text-pink-500 '
                        )} onClick={close}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  )
}