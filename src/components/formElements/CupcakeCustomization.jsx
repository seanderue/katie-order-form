import React from 'react'

export default function CupcakeCustomization() {
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
    </>
  )
}
