import React from 'react'

export default function FormRadio({thumbnail, label, price, selected, onClick, enabled}) {

  const checkSelected = () => {
    if (selected && enabled)
      return true
    else 
      return false
  }

  return (
    <div onClick={onClick} className='radio-button__container'>
        <span className='radio__label'>
            {label}
        </span>
        <div className={checkSelected() ? 'radio__thumbnail clicked' : (enabled) ? 'radio__thumbnail' : 'radio__thumbnail disabled'}
        style={{ backgroundImage: `url(${thumbnail})` }}>
        </div>
        <span className = 'radio__label'>
          {price}  
        </span>        

    </div>
  )
}
