
import ThornsHero from "../assets/images/hero.webp"
const Hero = () => {
  return (
    <div className='hidden lg:block relative w-full h-[76vh] z-10 group'>
        <div className='absolute w-full h-full ' style={{backgroundImage: `url(${ThornsHero})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed" }}></div>
    </div>
  )
}

export default Hero