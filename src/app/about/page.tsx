import Image from 'next/image'
import './about.scss'
import me from '@/../public/assets/images/1747693138161.webp'

function About() {
  return (
    <div className='h-150 flex justify-center items-center'>

      <div className="card mx-auto hover:scale-[1.2]">
  <div className="img overflow-hidden">
    <Image 
    alt='me'
    src={me}
    className='object-cover scale-[2]'
    />
  </div>
  <span className='text-xl text-center text-white'> درباره من </span>

  <p className="info">
    من مانی ام، و در حوزه برنامه نویسی وب <br />
     (فرانت اند | Front-end developer) <br />
       فعالیت میکنم ، و دانشجوی  کارشناسی مهندسی کامپیوتر هستم
    
    </p>
  <div className="share text-center text-indigo-500">
      راه های ارتباطی در پایین صفحه هست !
  </div>
</div>
    </div>
  )
}

export default About