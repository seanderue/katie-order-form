import React, {useState} from 'react'
import MenuButton from './MenuButton'


export default function Menu({menuOpen, setMenuOpen}) {

const handleClick = () => {

    setMenuOpen((prevState) => !prevState)
}

  return (
    <>
      <div className={menuOpen ? 'menu_btn__container opened' : 'menu_btn__container closed'} >
          <MenuButton
              handleClick={handleClick}
              menuOpen={menuOpen} />
      </div>
      <div className={menuOpen ? 'menu opened' : 'menu'}>
        <div className={menuOpen ? 'menu__container opened' : 'menu__container'}>
          <div className="menu__content">
            <div className='menu__content__bio'>
              <h5 className="menu__subheader">Hi there!</h5>
              <h1 className="menu__header">About Me:</h1>
              <p>
                I'm sweet-toothed foodie based out of <b>Westfield, IN.</b> I decorated my first cake with my Nana at 10 years old, and have loved baking ever since. Now I sell baked goods from scratch across Hamilton County! 
                <br/><br/>
                I'm still just a one-woman show, so if you place an order request online here, I'll get back to you as soon as I can to let you know if I can make your order for you. <i>(The earlier the order is placed, the more likely that I'll be able to make it for you!)</i> 
                <br/><br/>
                {/* Don't get me wrong, I <b>love</b> a good box-cake, but you can't beat homemade. Baking industry secret: most bakeries use cake-mixes for their cakes! It's kind of sad, but it's just not as feasible to make it from scratch every time.
                <br/><br/>
                My favorite thing to bake are cakesicles. The cake stays nice and moist when coated in snappy chocolate. And they have just enough space to decorate in fun ways. */}
              </p>
            </div>
            <div className="menu__content__footer">
        
              <a data-tool-tip="Feel free to drop me an Email!" className="underline tooltip" href='mailto:Contact.katieannskitchen@gmail.com'>Email</a> 
              
              <a data-tool-tip="Need inspiration?" className="underline tooltip small" href='https://www.instagram.com/katieannskitchen/'>Instagram</a>
                
              <a data-tool-tip="Want to join my facebook group?" className="underline tooltip" href='https://www.facebook.com/katieannskitchen/'>Facebook</a>
            </div>
            <div className='menu__madeby'>
                <a className='underline madeby' href='https://seanderue.dev'> Made with <span className='heart'>&hearts;</span> by Sean DeRue</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
