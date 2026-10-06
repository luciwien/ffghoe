import {getSubsiteBySlug, getAllSubsiteSlugs, getInfocornerPages } from '@/lib/sanity/client'
import InfocornerPage from "./default";

export async function generateStaticParams() {
  return await getAllSubsiteSlugs();
}

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const subsite = await getSubsiteBySlug(slug);
  return { title: subsite.title };
}

export default async function InfocornerDefault({ params }) {
  const infocornerPages = await getInfocornerPages();
  
  const {slug} = await params; 
  
  const infocorner = await getSubsiteBySlug(slug);
  return <InfocornerPage infocornerPages={infocornerPages} infocorner={infocorner}/>;
}

// export const revalidate = 60;
