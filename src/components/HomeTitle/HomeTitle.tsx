"use client"
import Image from "next/image";
// import GwImg from '../../../public/assets/images/na-glavnuyu-gelik-1.webp'
import GwImg from '../../../public/assets/images/title-g.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";






function HomeTitle() {
        
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <>
       <div className="title bg-yan-500 w-full  lg:h-5/8 h-4/8 flex-col justify-center items-start relative  ">

        <h1 className="lg:text-9xl text-7xl absolute lg:left-70 z-1 fa2 title-back"
         data-aos="fade-down">
             بزرگترین 
        </h1>
       
        <Image 
          src={GwImg}
          alt="mew"
          width={1500}
          height={500}
          className="scale-x-[-1] relative lg:left-[-320] left-[-120] z-2 w-100 lg:w-200"

            data-aos-delay="2000"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />


        <h1 className="absolute lg:left-[20] left-0  lg:bottom-10 bottom-0  z-3 text-indigo-500 lg:text-9xl text-5xl text-nowrap fa2 title-front"
         data-aos="fade-up"
        >
          فروشگاه خودرو 
        </h1>

        </div>
    </>
  )
}

export default HomeTitle