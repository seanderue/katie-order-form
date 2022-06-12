import React from 'react'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

export default function FormCustomization({newType, setNewDescription, setNewTheme, setNewQuantity, setNewOccasion, setNewFlavor, setImageUpload}) {


  return (
      <>
            <FormInput 
                placeholder='Flavor(s)'
                updateState={setNewFlavor}
            />
            <FormInput 
                placeholder="What's the occasion?"
                updateState={setNewOccasion}
            />
            <FormInput 
                placeholder='Theme'
                updateState={setNewTheme}
            />            
            <FormTextArea
                placeholder="Description/Special Requests"
                updateState={setNewDescription}
            />

            {/* //Change this to conditional rendering */}
            <input 
                className='form__field'
                type='number'
                placeholder='Quantity' 
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
