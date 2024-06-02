import React from 'react'

function Select({
    options,
    className = "",
    ...props
},ref) {
  return (
    <select ref={ref} {...props} className={`${className}`} >
        {options.map((option)=> (
            <option key={option} value={option} > {option} </option>
        ) )}
    </select>
  )
}

export default React.forwardRef(Select);