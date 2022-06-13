import React from 'react'
import FormInput from './FormInput'

export default function FormContact({setNewName, setNewEmail, setNewPhone, setNewPickup}) {

    return (
    <>
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
        
        <label className="fileUpload__label" htmlFor="fileUpload">When would is your preferred pick it up?</label>
        <FormInput
            placeholder="(Date and Time)"
            updateState={setNewPickup}

        />
    </>
  )
}