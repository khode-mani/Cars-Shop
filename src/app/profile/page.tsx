// "use client"

// import React from "react";
// import { useRouter } from "next/navigation";
// import cookie from "js-cookie";
// import '../cart/cart.scss'

// function Page() {
//   const router = useRouter();

//   const handleLogout = () => {
//     cookie.remove("token", { path: '/' });
//     router.push("/login"); // ✅ هدایت به صفحه ورود
//   };

//   return (
//     <div className="mt-40 flex flex-col justify-center items-center gap-20">
//       <div>
//         <h1 className="text-center text-8xl">اینجا پروفایل شماست</h1>
//         <h1 className="text-center text-3xl">(... coming soon)</h1>
//       </div>

//       <button onClick={handleLogout} className='discover-btn fa2 no-cursor '> خروج از حساب کاربری </button>
//     </div>
//   );
// }

// export default Page;


"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
import '../cart/cart.scss';

function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = cookie.get("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    cookie.remove("token");
    // router.push("/login");
    window.location.href = "/login";

  };

  return (
    <div className="mt-40 flex flex-col justify-center items-center gap-20">
      <div>
        <h1 className="text-center text-8xl">اینجا پروفایل شماست</h1>
        <h1 className="text-center text-3xl">(... coming soon)</h1>
      </div>

      <button onClick={handleLogout} className="discover-btn fa2 no-cursor">
        خروج از حساب کاربری
      </button>
    </div>
  );
}

export default Page;
