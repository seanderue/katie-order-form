import React , {useState} from 'react'

export default function MenuButton({handleClick, menuOpen}) {

  return (

    <div id='menu-btn' className={menuOpen ? 'open' : 'close'} onClick={handleClick}>
        <span className='menu-icon'></span>
        <span className={menuOpen ? 'menu-text open' : 'menu-text'}>ABOUT</span>
    </div>
  )
}
