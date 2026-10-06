import { getSettings, getAboutPages, getQfhPages, getInfocornerPages } from '@/lib/sanity/client'
import Footer from '@/components/footer'
import { urlForImage } from '@/lib/sanity/image'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import bg from '@/public/bg.png'
import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export async function sharedMetaData(params) {
  const settings = await getSettings()

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        'Stablo - Blog Template for Next.js & Sanity CMS',
      template: '%s | Stablo'
    },
    description:
      settings?.description ||
      'Stablo - popular open-source next.js and sanity blog template',
    keywords: ['Next.js', 'Sanity', 'Tailwind CSS'],
    authors: [{ name: 'Surjith' }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            '/img/opengraph.jpg',
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || 'Stablo Template',
      card: 'summary_large_image'
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params)
}

export default async function Layout({ children, params }) {
  const settings = await getSettings()
  const aboutPages = await getAboutPages()
  const infocornerPages = await getInfocornerPages()
  return (<html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="antialiased text-gray-800 bg-white/90" style={{backgroundImage: `url(${bg.src})`,backgroundSize: "cover"  }} >
        
          <div className={"bg-white"}>
            <Navbar settings={settings} aboutPages={aboutPages.subsites}
                    infocornerPages={infocornerPages.subsites} />

            <div>{children}</div>

            <Footer {...settings} />

            <Analytics />
          </div>
        
      </body>
    </html>
  )
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
