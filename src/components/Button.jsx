import React from 'react'

function Button({
        type = "submit",
        className = "",
        children,
        ...props
    }) {
  return (
     <button type={type} className={`${className}`} {...props} > {children} </button>
  )
}

export default Button