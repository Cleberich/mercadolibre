import Image from "next/image"

const Portada = () => {
  return (
    <div className="flex overflow-x-scroll">
        <Image 
        src='/img/banner.jpeg'
        className="w-full"
        alt='banner'
        width={400}
        height={200}
        priority={true}
        />
        <Image 
        src='/img/banner2.jpeg'
        className="w-full"
        alt='banner 2'
        width={400}
        height={200}
        priority={true}
        />
        <Image 
        src='/img/banner3.jpeg'
        className="w-full"
        alt='banner 3'
        width={400}
        height={200}
        priority={true}
        />
    </div>
  )
}

export default Portada