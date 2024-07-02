import PhotoDetails from "@/app/components/PhotoDetails";
import Modal from "@/app/components/Modal";

const PhotoModal =({params:{id, lang}})=> 
{
    return (
        <Modal>
            <PhotoDetails id={id} lang={lang}/>
        </Modal>
    )
}

export default PhotoModal
