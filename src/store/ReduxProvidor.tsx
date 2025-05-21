"use client"
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
// import { useEffect } from 'react'
// import { setCartItemsFromStorage } from '@/store/cartSlice'
// import { useAppDispatch } from '@/hooks/reduxHook'

function ReduxProvidor({children} : {children : ReactNode}) {

//   const dispatch = useAppDispatch()

// useEffect(() => {
//     const cartData = localStorage.getItem("cart");
//     if (cartData) {
//         dispatch(setCartItemsFromStorage(JSON.parse(cartData)));
//     }
// }, []);


  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProvidor