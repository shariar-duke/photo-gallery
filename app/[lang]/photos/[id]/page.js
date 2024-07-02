import PhotoDetails from "@/app/components/PhotoDetails";
export default function PhotoDetailsPage({ params: { id, lang } }) {
  return (
    <div>
      <PhotoDetails id={id} lang={lang} />
    </div>
  );
}
