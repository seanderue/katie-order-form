import React from 'react'

export default function Alert({message}) {
  return (
    <div className='alert__container'>
        <div className='alert__text'>
            <p> {message} </p>
        </div>
    </div>
  )
}
