import Container from "@/components/container";
import { PortableText } from "@portabletext/react";

export default function MitgliedWerden({ mitgliedWerden }) {
  return (
    <Container>
      <div className={"flex flex-col lg:ml-12 gap-6 px-6 py-4 lg:w-3/4 mt-4 lg:-mt-2"}>
        <h1 className={"mb-6 text-center text-2xl font-bold"}>
          {mitgliedWerden.title}
        </h1>
        <PortableText value={mitgliedWerden.body} />
      </div>
      <div className="flex justify-around mx-auto max-w-3xl">
        <a
          href={mitgliedWerden.ctaUrl}
          className="mx-w-full rounded-md justify-around  bg-pink-800 px-7 py-4 font-semibold text-white transition-colors hover:bg-pink-600 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 ">
          {mitgliedWerden.ctaText}
        </a>
      </div>
    </Container>
  );
}

//mx-w-full rounded-md bg-red-400 

// bg-fuchsia-700
// text-white
// text-black

// bg-pink-800