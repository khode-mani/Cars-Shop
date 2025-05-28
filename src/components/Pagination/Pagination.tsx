"use client"

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";



function Pagination({pageCount} : {pageCount:number}) {
    
    const router = useRouter()

    const handlePageClick = (e : {selected : number})=>{
    
        const page = e.selected + 1;

        router.push(`/shop?page=${page}&per_page=6`)        
        
    }

  return (
    <div>
      <ReactPaginate className="flex gap-5 items-center justify-center select-none  w-full lg:w-1/2 mx-auto  py-10"
        breakLabel="..."
        nextLabel="صفحه بعدی >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< صفحه قبلی"
        renderOnZeroPageCount={null}


        pageLinkClassName="bg-indigo-500 hover:bg-indigo-700 transition duration-250 text-white px-3 py-1 w-10 h-10 flex justify-center items-center font-bold rounded-full en cursor-pointer"
        activeLinkClassName=" border-2 bg-indigo-700"
        previousClassName="px-2 py-0.5 hover:bg-gray-600 hover:text-white rounded-full transition duration-250 fa2 cursor-pointer"
        nextClassName="  px-2 py-0.5 hover:bg-gray-600 hover:text-white rounded-full transition duration-250 fa2 cursor-pointer"
      />
    </div>
  );
}

export default Pagination;
