import React from 'react'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

export default function FormCustomization({newType, setNewDescription, setNewTheme, setNewQuantity, setNewFlavor, setImageUpload}) {


  return (
      <>
        <FormInput 
            placeholder='Flavor(s)'
            updateState={setNewFlavor}
        />
        <FormInput 
            placeholder='Theme'
            updateState={setNewTheme}
        />            
        <FormTextArea
            placeholder="Description/Special Requests"
            updateState={setNewDescription}
        />

        <input 
            className='form__field'
            type='number'
            placeholder='Order Quantity' 
            onChange={e => setNewQuantity(e.target.value)}/>

        <label className="fileUpload__label" htmlFor="fileUpload">Reference Photo (optional)</label>
        <input
            className='form__field'
            type="file"
            id="fileUpload"
            onChange={e => setImageUpload(e.target.files[0])}/>
    </>
  )
}
