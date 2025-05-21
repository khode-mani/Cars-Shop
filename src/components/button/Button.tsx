import React from 'react'
import'./Button.scss'
interface IButtonProps {
    children : string | React.ReactNode,
    onClick?: ()=>void;
    className?: string;
}


function Button( {children , onClick , className} : IButtonProps ) {
  return (
    <button onClick={onClick} className={`fa2  rounded-xl button-c  ${className} px-6 py-3`}>
        {children}
    </button>

)
}

export default Button