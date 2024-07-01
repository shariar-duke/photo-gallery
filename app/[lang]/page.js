import { getDictionary } from "./dictionaries";
export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return <div>{dictionary.followers}</div>;
}
