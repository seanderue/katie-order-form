import React from 'react'

export default function Logo({menuOpen}) {
  return (
    <div className='Logo'>
        <h1 className={menuOpen ? 'Logo-text open' : 'Logo-text'} data-text="Katie Ann's Kitchen">Katie Ann's Kitchen</h1>
    </div>
  )
}
