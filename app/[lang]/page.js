import PhotoList from "../components/PhotoList";
import { getDictionary } from "./dictionaries";


export default async function Home() {

  const response = await fetch(`${process.env.BASE_API_URL}/photos?refresh=${Date.now()}`);

  const photos = await response.json();

  console.log("Photos are", photos)

  return (
    <PhotoList photos={photos} />
  );
}
