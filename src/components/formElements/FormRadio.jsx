import React, {useState} from 'react'

export default function FormRadio({thumbnail, label, selected, onClick}) {

  return (
    <div onClick={onClick} className='radio-button__container'>
        <span className='radio__label'>
            {label}
        </span>
        <div className={selected ? 'radio__thumbnail clicked' : 'radio__thumbnail'}
        style={{
            backgroundImage: `url(${thumbnail})`
        }}></div>
    </div>
  )
}
