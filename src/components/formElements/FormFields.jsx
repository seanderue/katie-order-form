import React, {useState, useEffect} from 'react'
import { storage } from '../../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import FormContact from './FormContact'
import FormCustomization from './FormCustomization'

export default function FormFields({ newType, setNewDescription, setNewQuantity, setNewTheme, setNewOccasion, setNewFlavor, setNewName, setNewEmail, setNewPhone, setNewPickup}) {
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
        <h1 style={{'textAlign': 'center'}}>New {newType} Order:</h1>
        <h2>Customize your order:</h2>
        <FormCustomization 
            newType={newType}
            setNewDescription={setNewDescription}
            setNewQuantity={setNewQuantity}
            setNewTheme={setNewTheme}
            setNewOccasion={setNewOccasion}
            setNewFlavor={setNewFlavor}
        />
        
        <h2>Contact Info:</h2>
        <FormContact
            setNewName={setNewName}
            setNewEmail={setNewEmail}
            setNewPhone={setNewPhone}
            setNewPickup={setNewPickup}
        />
    </div>
  )
}