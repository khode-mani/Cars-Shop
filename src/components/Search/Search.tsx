// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
// import './Search.css'

// function Search() {
//   const searchParams = useSearchParams();

//   const router = useRouter();

//   const [search, setSearch] = useState("");

//   const handleSearch = () => {
//     // console.log(searchParams.toString());

//     const currentSearchParams = new URLSearchParams(searchParams.toString());

//     currentSearchParams.set("title", search);

//     console.log(currentSearchParams.toString());

//     router.push(`/shop?${currentSearchParams.toString()}`);
//   };

//   return (
//     // <div className="rounded-full bg-white shadow-xl shadow-gray-500  mt-5 overflow-hidden inline-block">
//     //   <input
//     //     type="text"
//     //     onChange={(e) => setSearch(e.target.value)}
//     //     placeholder="search Products"
//     //     className="outline-0  px-3 py-1 "
//     //   />

//     //   <button
//     // onClick={handleSearch}
//     //   className="bg-indigo-500 text-white px-3 py-1 cursor-pointer hover:bg-indigo-700 rounded-full transition duration-150">
//     //     search
//     //   </button>
//     // </div>
//     <div>
//       <div className="input__container mx-auto">
//         <div className="shadow__input"></div>
//         <button className="input__button__shadow" onClick={handleSearch}>
//           <svg
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             height="20px"
//             width="20px"
//           >
//             <path
//               d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
//               fillRule="evenodd"
//               fill="#17202A"
//             ></path>
//           </svg>
//         </button>
//         <input
//           type="text"
//           name="text"
//           className="input__search bg-gray-200 text-gray-500"
//           placeholder=" جستجو برای نام کامل خودرو"
//           onChange={(e) => setSearch(e.target.value)}

//         />
//       </div>
//     </div>
//   );
// }

// export default Search;



"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import './Search.css'

function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());

    currentSearchParams.set("title", search);
    currentSearchParams.set("page", "1"); // وقتی سرچ کردیم، همیشه بریم صفحه اول

    router.push(`/shop?${currentSearchParams.toString()}`);
  };

  return (
    <div>
      <div className="input__container mx-auto">
        <div className="shadow__input"></div>
        <button className="input__button__shadow" onClick={handleSearch}>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="20px"
            width="20px"
          >
            <path
              d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
              fillRule="evenodd"
              fill="#17202A"
            ></path>
          </svg>
        </button>
        <input
          type="text"
          name="text"
          className="input__search bg-gray-200 text-gray-500"
          placeholder=" جستجو برای نام کامل خودرو"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
