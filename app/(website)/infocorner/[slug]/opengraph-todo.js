import { ImageResponse } from "@vercel/og";
import { getProjectBySlug } from "@/lib/sanity/client";
import OgImage from "@/components/ogimage";

// const InterRegular = fetch(
//   new URL("../../../../public/fonts/Inter.ttf", import.meta.url)
// ).then(res => res.arrayBuffer());

const InterBold = fetch(
  new URL("../../../../public/fonts/Inter-Bold.otf", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler({ params }) {
  const project = await getProjectBySlug(params.slug);

  const fontData = await InterBold;
  // const [interRegularFont, interBoldFont] = await Promise.all([
  //   InterRegular,
  //   InterBold
  // ]);

  return new ImageResponse(<OgImage project={project} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontData,
        style: "normal"
      }
      // {
      //   name: "Inter",
      //   data: interBoldFont,
      //   style: "normal",
      //   weight: 700
      // }
    ]
  });
}