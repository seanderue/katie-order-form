import React, { useState } from 'react'

export default function TypeButton(props) {

  // console.log(props.selected)
  return (
    <div
      className={props.selected ? 'TypeButton clicked' : 'TypeButton'}
      onClick={props.onClick}>

      {/* Added img tag with alt text for accessibility */}
      <img
        className={`TypeButton-image ${props.name}`}
        src={props.photo}
        alt={props.altText}
        /> 
    </div>
  )
}
