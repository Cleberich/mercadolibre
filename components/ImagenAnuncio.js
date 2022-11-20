import Image from "next/image"

const ImagenAnuncio = () => {
  return (
    <div className="mx-3">
        <Image 
        src='/img/ImagenAnuncio.jpeg'
        alt='banner'
        width={400}
        height={200}
        />
    </div>
  )
}

export default ImagenAnuncio