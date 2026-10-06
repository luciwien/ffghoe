import MitgliedWerden from "./mitgliedWerden";
import {getMitgliedWerden} from '@/lib/sanity/client'

export default async function MitgliedWerdenPage() {
  const mitgliedWerden = await getMitgliedWerden()
  return <MitgliedWerden mitgliedWerden={mitgliedWerden}/>;
}

// export const revalidate = 60;
