import Image from "next/image"

const Portada = () => {
  return (
    <div>
        <Image 
        src='/img/banner.jpeg'
        className="w-full"
        alt='banner'
        width={400}
        height={200}
        />
    </div>
  )
}

export default Portada