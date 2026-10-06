import { getAboutPages,getSubsiteBySlug,getAllSubsiteSlugs } from "@/lib/sanity/client";
import AboutPage from "./default";

export async function generateStaticParams() {
  return await getAllSubsiteSlugs();
}

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const subsite = await getSubsiteBySlug(slug);
  return { title: subsite.title };
}

export default async function AboutDefault({ params }) {
  const aboutPages = await getAboutPages();
  const {slug} = await params;
  const about = await getSubsiteBySlug(slug);
  return <AboutPage aboutPages={aboutPages} about={about}/>;
}

// export const revalidate = 60;
