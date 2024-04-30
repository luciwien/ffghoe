import Link from 'next/link';
import {RenderText} from "@/components/render";
import {parseISO, format} from "date-fns";
import  deLocale from 'date-fns/locale/de'

export default function ThemeSiteWrapper({themenListe, siteContent}) {
  if (!themenListe || !siteContent) {
    return (<div></div>);
  }
  //
  // const date = new Date(manifest?.lastChanged);
  // const date = format(parseISO(manifest?.lastChanged),'MMMM yyyy', {locale: deLocale});


  let nextAbschnitt = themenListe?.filter(item => item.abschnittsnummer === manifest.abschnittsnummer + 1)[0];

  if (nextAbschnitt && nextAbschnitt.abschnittsnummer < themenListe?.length) {
    nextAbschnitt = themenListe?.filter(item => item.abschnittsnummer === 1)[0];
  }
// container mx-auto
  return (
    <div className={"px-2 py-2 max-w-screen-loci z-10 "}>
      <div className={"hidden lg:block w-full fixed bottom-0 "}>
        <div className="flex flex-row items-stretch max-w-screen-loci">
          <div className={"flex flex-col divide-black divide-y-2 w-1/2 pr-10 mb-16"}>
            <div></div>
            {themenListe?.map((currentThema, index) => {
              return (
                <Link key={index} href={`/manifest/${currentThema.slug.current}`}
                      className={"flex flex-row py-2"}>
                  <div className={"w-2/6"}>
                    <h1 className={"font-arial text-sm-arial lg:text-sd-arial"}>{currentThema.abschnittsnummer}</h1>
                  </div>
                  <div className={"flex flex-col font-serif text-sm lg:text-sd"}>
                    {slug === currentThema.slug.current ?
                      <h2 className={"font-italic text-sm-italic lg:text-sd-italic"}>{currentThema.title}</h2> :
                      <h2 className={"font-serif text-sm lg:text-sd hover:font-italic hover:text-sm-italic hover:lg:text-sd-italic"}>{currentThema.title}</h2>
                    }
                  </div>
                </Link>);
            })}
            <div></div>
          </div>
          <div className={"lg:flex w-1/2"}></div>
        </div>
      </div>

      <div className={"flex flex-col lg:flex-row"}>
        <div className={"mt-4 flex flex-col divide-black divide-y-2 lg:hidden"}>
          <div></div>
          {themenListe?.map((currentThema, index) => {
            return (
              <Link key={index} href={`/manifest/${currentThema.slug.current}`} className={"flex flex-row py-2"}>
                <div className={"w-2/6"}>
                  <h1 className={"font-arial text-sm-arial lg:text-sd-arial"}>{currentThema.abschnittsnummer}</h1>
                </div>
                <div className={"flex flex-col font-serif text-sm lg:text-sd"}>
                  {slug === currentThema.slug.current ?
                    <h2 className={"font-italic text-sm-italic lg:text-sd-italic"}>{currentThema.title}</h2> :
                    <h2 className={"font-serif text-sm lg:text-sd"}>{currentThema.title}</h2>
                  }
                </div>
              </Link>);
          })}
          <div></div>
        </div>
        <div className={"hidden lg:flex w-1/2"}></div>
        <div className={"flex flex-col gap-6 pb-16  lg:w-1/2 mt-4 lg:-mt-2 "}>
          {siteContent}
        </div>
      </div>
    </div>
  );
}


