import { getAllAuthors, getSettings,getAbout } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  const about = await getAbout();
  return <About settings={settings} authors={authors} about={about}/>;
}

// export const revalidate = 60;
