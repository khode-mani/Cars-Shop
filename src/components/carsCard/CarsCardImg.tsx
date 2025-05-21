"use client"

import Image from 'next/image'
import { useState } from 'react'
import notload from '../../../public/assets/images/svg/FreeSample-Vectorizer-io-998f6216d4259fa_410x230 (1).svg'

interface ICardImgProp {
  imgSrc: string
}

function CarsCardImg({ imgSrc }: ICardImgProp) {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <div>
      {!loaded && (
        <div>
          <Image 
            alt='car'
            src={notload}
            width={10}
            height={10}
            className='car-card-img absolute w-full top-[-80] '
          />
        </div>
      )}

      <Image
        alt="car"
        src={imgSrc}
        width={1000}
        height={1000}
        className={`car-card-img absolute w-full top-[-80]  transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default CarsCardImg
