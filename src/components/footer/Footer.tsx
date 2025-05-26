import { FaGithub, FaLinkedin, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'
import './Footer.scss'

function Footer() {
  return (
    
    <footer className=' lg:flex h-full  mx-auto w-full   max-w-[1538px] lg:p-10'>

        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center  en text-gray-300 bg-indigo-700 rounded-t-3xl lg:rounded-4xl  w-full h-full relative'>
            
            <h1 className='text-5xl lg:text-9xl border-b-8 lg:border-b-0 lg:border-l-8  px-10 lg:pl-10 '>
                Footer
            </h1>
                
                <div className='lg:pr-0  flex flex-col  gap-y-1 '>
                    
                                            <a href="https://t.me/IN_G0DWE_TRUST" target='_blank' className='flex gap-5 text-xl veiw-cursor mx-auto lg:mx-0 '>
                                                    <FaTelegram />
                                                <span> IN_G0DWE_TRUST@ </span>
                
                                            
                                            </a>
                
                                            <a href={"https://github.com/khode-mani"} target='_blank' className='flex gap-5 text-xl veiw-cursor mx-auto lg:mx-0'>
                                                    <FaGithub />
                                                <span> khode-mani </span>
                
                                            </a>
                
                                            <a href={"https://wa.me/+989332067945"} target='_blank' className='flex gap-5 text-xl veiw-cursor mx-auto lg:mx-0'>
                                                    <FaWhatsappSquare />
                                                <span> 09332067945 </span>
                
                                            </a>
                
                                            <a href={"https://linkedin.com/in/mani-norouzi-5a324826a"} target='_blank' className='flex gap-5 text-xl veiw-cursor  mx-auto lg:mx-0'>
                                                    <FaLinkedin />
                                                <span> mani-norouzi </span>
                                            </a>
                
                </div>

                <p className='absolute right-0 w-full font-bold bottom-3 text-center mx-auto'>
                    . Copyright © 2025. All Rights Reserved
                </p>
        </div>

    </footer>
  )

}

export default Footer