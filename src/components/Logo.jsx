import React from 'react'

export default function Logo({menuOpen}) {
  return (
    <div className='Logo'>
        <h1 className={menuOpen ? 'Logo-text open' : 'Logo-text'} data-text="Katie Ann Bakes">Katie Ann Bakes</h1>
    </div>
  )
}
