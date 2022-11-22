import Image from "next/image"

const ImagenAnuncio = () => {
  return (
    <div className="bg-gris pb-1">
    <div className="mx-3">
            <Image 
            src='/img/imagenAnuncio.jpeg'
            alt='banner'
            width={400}
            height={200}
            />
        </div>
    </div>
  )
}

export default ImagenAnuncio