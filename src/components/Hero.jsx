/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import logo from '../assets/vikas.png'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      <div className = "flex justify-center items-center">
       <div>
       <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm 
        <span className = "text-[#915eef]">Vikas Bhatt</span>
        </h1>

        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I am a creative developer, who aims  <br/>
        to bring the passions to life. 
        </p>
       </div>

        <div className="relative h-[200px] ml-20 w-[200px] rounded-xl">
          <img src={logo} alt="Profile Image" />
        </div>
      </div>
      </div>

      <ComputersCanvas/>
    </section>
  )
}

export default Hero