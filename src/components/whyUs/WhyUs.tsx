"use client"

import AOS from 'aos';
import './WhyUs.scss'
// import {  FaMoneyBill,FaLock,FaStar,FaCar } from 'react-icons/fa'
// import { BiSupport } from "react-icons/bi";
// import { IoIosTimer } from "react-icons/io";
import { ReactNode, useEffect } from 'react';



interface IWhyUsProps {
    icon : ReactNode,
    title : string,
    desc : string,
}


function WhyUs({ desc, icon, title }: IWhyUsProps) {

    useEffect(() => {
        AOS.init();
    }, []);  
  // const icons = [<FaCar className='mew' /> , < FaStar/> , < FaLock/> , < FaMoneyBill/> , <BiSupport/> , <IoIosTimer/>];


  return (
    <div className="why-us-con border-3 border-indigo-500  py-5 px-8 rounded-4xl flex flex-col lg:flex-row justify-between items-center gap-5" data-aos="fade-bottom" data-aos-delay="50">
      <div className="rounded-full border-2 border-white text-white lg:text-7xl text-4xl p-4 icon ">
        
        {icon}

      </div>
      <div>
        <h1 className="text-3xl py-5 text-center">{title}</h1>
        <p className="text-justify">{desc}</p>
      </div>
    </div>
  );
}


export default WhyUs