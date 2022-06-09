import React from 'react'

export default function TypeButton({selected, price, altText, onClick, title, index}) {

  return (
    <div className={`card card--${index}`} onClick={onClick}> 
    <div className={selected ? "card__info-hover--clicked" : "card__info-hover"}>
        <div className="card__price-info">
          <span className="card__price">{price}</span>
        </div>  
    </div>

    <div className={selected ? "card__img" : "card__img"}></div>
    
    <div className="card_link">
      <div className={selected ? 'selected' : undefined}>
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
