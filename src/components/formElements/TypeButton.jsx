import React, { useState } from 'react'

export default function TypeButton({selected, price, altText, onClick, title, index}) {

//   .card:hover .card__img--hover {
//     height: 100%;
//     opacity: 0.3;
// }

// .card:hover .card__info {
//     background-color: transparent;
//     position: relative;
// }

// .card:hover .card__info-hover {
//     opacity: 1;
// }

// .card__img--clicked {
//     height: 100%;
//     opacity: 0.3;
// }


  return (
    <div className={`card card--${index}`} onClick={onClick}> 
    <div className={selected ? "card__info-hover--clicked" : "card__info-hover"}>
        <div className="card__price-info">
          <span className="card__price">{price}</span>
        </div>  
    </div>

    <div className={selected ? "card__img" : "card__img"}></div>
    
    <div className="card_link">
      <div className={selected && 'selected'}>
        <div className={selected ? "card__img__overlay-clicked" : "card__img--hover"}></div>
      </div>
    </div>
    
    <div className={selected ? "card__info--clicked" : "card__info"}>
      <span className="card__category"> Homemade</span>
      <h3 className="card__title">{title}</h3>
    </div>
  </div>
  )
}
