import React from 'react'

function Input({
    type = "text",
    className = "",
    ...props
},ref) {
  return (
    
        <input ref={ref}  className={`${className}`} type={type} {...props} />
  )
}

export default  React.forwardRef(Input);