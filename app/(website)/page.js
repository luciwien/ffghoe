import HomePage from "./home";
import Contact from "./contact/contact"
import { getLandingPage, getSettings } from '@/lib/sanity/client'

export default async function IndexPage() {
  const landingPage = await getLandingPage();
  const settings = await getSettings();
  return <>
    <HomePage landingPage={landingPage} />
    <Contact settings={settings} />
  </>;
}

// export const revalidate = 60;

