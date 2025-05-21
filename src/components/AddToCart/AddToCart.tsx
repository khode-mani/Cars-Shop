"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { addToCartReducer, deleteFromCart, removeFromCart } from "@/store/cartSlice";
import { useEffect, useState } from "react";
import './AddToCard.scss'

function AddToCart({productId} : { productId : string}) {


    const dispatch = useAppDispatch()
    const selector = useAppSelector(state=> state.cart.items)


    const productQty = selector.find(item=> item.id === productId)?.qty || 0
    



      const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // 🔥 نمایش نده تا سمت کلاینت لود بشه

  return (
    <div className="flex flex-col items-center justify-center   rounded-2xl">

      {/* <h1 className="font-black text-xl">Add to Cart</h1> */}
      
      
      <div className="grid grid-cols-3 justify-between items-center  mt-1  rounded-2xl w-full h-10  overflow-hidden ">

        <button
        // onClick={dispatch( addToCartReducer(productId))}
        onClick={()=> dispatch(addToCartReducer(productId))}
        className="bg-indigo-500 h-full w-full text-3xl hover:bg-indigo-700 transition-all"
        >
            +
        </button>




        <span className="text-3xl h-full w-full flex  justify-center items-center bg-gray-100 add-counter text-black pt-1.5">

            <h1>{productQty}</h1>

        </span>


        <button
        onClick={()=> dispatch(removeFromCart(productId))}
        className="bg-indigo-500 text-3xl h-full w-full hover:bg-indigo-700 transition-all"

        >
          -          
        </button>

      </div>
      
      <button className={`bg-red-400  rounded-b-lg text-white hover:bg-red-700
       cursor-pointer overflow-hidden transition-all duration-1500 px-4  fa2
       ${productQty == 0 ? 'h-0' : 'h-6' }
       `}


        onClick={()=> dispatch(deleteFromCart(productId))}
      >
        حذف
      </button>
    </div>
  );
}

export default AddToCart;
