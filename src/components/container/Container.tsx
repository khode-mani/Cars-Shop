import { ReactNode } from 'react'

function Container({children , className} : {children : ReactNode , className? : string})  {
  return (
    <div className= {`max-w-[1200px] w-[90%] mx-auto lg:p-6 p-0 bg-blu-500 ${className}`}>

        {children}

    </div>
  )
}

export default Container