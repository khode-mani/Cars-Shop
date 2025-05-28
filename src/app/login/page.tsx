"use client"

import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import'./login.css'
import cookie from 'js-cookie'
import { useEffect } from 'react'





function Login() {

  const router = useRouter()

  const handleLogin = (e : React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()


    const response = {
        token : 'damsfkskfmksmdl,vl;,llmckxofkpw',
        expire : 100
    }

    // cookie.set('token' , response.token , { expires : response.expire , path: '/'});
    cookie.set('token', response.token, { 
      expires: response.expire, 
      // path: '/',
    });

    // router.push('/profile')
    window.location.href = "/profile";

  }
  

  useEffect(()=>{
      const token = cookie.get("token" )
    if (token) {
      router.push('/profile')
    }

  },[router])


  return (
    <div className='w-100 h-150 flex flex-col justify-center items-center mx-auto'>
        <form className="form">
              <div className="title">
                خوش آمدید,<br />
                <span> برای ادامه ثبت نام کنید </span> 
              </div>
              <input className="input" name="email" placeholder="نام کاربری" type="email"/>
              <input className="input" name="password" placeholder="رمز" type="password" />
              <button className="button-confirm cursor-pointer"
              onClick={handleLogin}
              > → تایید</button>
        </form>
        
        <p className='mt-10 text-center underline'>( نسخه آزمایشی است ، هر یوزر نیم و پسوردی معتبر است ) </p>
    </div>
  );
}

export default Login;
