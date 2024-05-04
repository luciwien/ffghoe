import {getSubsiteBySlug, getAllSubsiteSlugs, getQfhPages } from '@/lib/sanity/client'
import QfhPage from "./default";

export async function generateStaticParams() {
  return await getAllSubsiteSlugs();
}

export async function generateMetadata({ params }) {
  const subsite = await getSubsiteBySlug(params.slug);
  return { title: subsite.title };
}

export default async function InfocornerDefault({ params }) {
  const qfhPages = await getQfhPages();
  const qfh = await getSubsiteBySlug(params.slug);
  return <QfhPage qfhPages={qfhPages} qfh={qfh}/>;
}

// export const revalidate = 60;
