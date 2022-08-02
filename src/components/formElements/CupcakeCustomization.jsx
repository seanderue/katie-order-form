import React from 'react'

export default function CupcakeCustomization({setNewFlavor, setNewTheme, setNewDescription}) {
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
    </>
  )
}
