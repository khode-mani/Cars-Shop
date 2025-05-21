import { FaGithub, FaLinkedin, FaTelegram, FaWhatsappSquare } from 'react-icons/fa'
import './Footer.scss'

function Footer() {
  return (
    
          <footer className=' lg:flex h-full  mx-auto w-full  justify-center items-center  en text-black bg-amber-500 max-w-[1538px] '>

      <h1 className='text-9xl lg:border-l-8  '>
      Footer

      </h1>
        
        <div className='pr-1  flex flex-col gap-1'>
            
                                    <a href="https://t.me/IN_G0DWE_TRUST" target='_blank' className='flex gap-5 text-xl veiw-cursor'>
                                            <FaTelegram />
                                        <span> IN_G0DWE_TRUST@ </span>
        
                                    
                                    </a>
        
                                    <a href={"https://github.com/khode-mani"} target='_blank' className='flex gap-5 text-xl veiw-cursor'>
                                            <FaGithub />
                                        <span> khode-mani </span>
        
                                    </a>
        
                                    <a href={"https://wa.me/+989332067945"} target='_blank' className='flex gap-5 text-xl veiw-cursor'>
                                            <FaWhatsappSquare />
                                        <span> 09332067945 </span>
        
                                    </a>
        
                                    <a href={"https://linkedin.com/in/mani-norouzi-5a324826a"} target='_blank' className='flex gap-5 text-xl veiw-cursor'>
                                            <FaLinkedin />
                                        <span> linkedin.com/in/mani-norouzi-5a324826a </span>
                                    </a>
        
        </div>

        <p className='absolute right-0 w-full font-bold bottom-0 text-center mx-auto'>
            . Copyright © 2025. All Rights Reserved
        </p>
    </footer>
  )

}

export default Footer