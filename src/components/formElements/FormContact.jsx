import React from 'react'
import FormTextArea from './FormTextArea'
import FormInput from './FormInput'

export default function FormContact({setNewName, setNewEmail, setNewPhone, setNewPickup}) {

    return (
    <div className='form__input-container'>
        <FormInput 
            placeholder="Full Name"
            updateState={setNewName}
        />
        <FormInput 
            placeholder='Email Address'
            updateState={setNewEmail}
        />
        <FormInput
            placeholder="Phone Number"
            updateState={setNewPhone}

        />
        <FormInput
            placeholder="When would you like to pick up? (Date and Time)"
            updateState={setNewPickup}

        />
        
    </div>
  )
}