import React, {useState, useEffect} from 'react'
import { storage } from '../../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import FormTextArea from './FormTextArea'
import FormInput from './FormInput'

export default function FormCustomization({ newDescription, setNewDescription, newQuantity, setNewQuantity, newTheme, setNewTheme, newOccasion, setNewOccasion, setNewName, setNewEmail, setNewPhone, setNewPickup}) {
    const [imageUpload, setImageUpload] = useState(null)
    const uploadImage = () => {
        if (imageUpload == null) return
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded")
        })

    }

    useEffect(() => {
      uploadImage()
    
    }, [imageUpload])
    

    return (
    
    <div className='form__input-container'>
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
        <input 
            className='form__field'
            type='number'
            placeholder='Quantity' 
            onChange={e => setNewQuantity(e.target.value)}/>
        <label className="fileUpload__label"for="fileUpload">Reference Photo (optional)</label>
        <input
            className='form__field'
            type="file"
            id="fileUpload"
            onChange={e => setImageUpload(e.target.files[0])}/>

        {/* <FormInput 
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
        /> */}
    </div>
  )
}