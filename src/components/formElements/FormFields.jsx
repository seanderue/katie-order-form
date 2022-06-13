import React, {useState, useEffect} from 'react'
import { storage } from '../../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import FormContact from './FormContact'
import FormCustomization from './FormCustomization'
import FormRadio from './FormRadio'

import cakeImg from '../../../public/cake.jpeg'
import FormRadioContainer from './FormRadioContainer'

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
    
    const cookieRadioArray = [{
        thumbnail: cakeImg,
        label: 'Cookies'
    }, {
        thumbnail: cakeImg,
        label: 'Cookie Cake'
    }]    
    
    const cakeRadioArray = [{
        thumbnail: cakeImg,
        label: '6" Round'
    }, {
        thumbnail: cakeImg,
        label: '8" Round'
    }, {
        thumbnail: cakeImg,
        label: '10" Round'
    }
]

    const [cookieSelection, setCookieSelection] = useState('')
    const [cakeSelection, setCakeSelection] = useState('')

    return (
    
    <div className='form__input-container'>
        <h1 style={{'textAlign': 'center'}}>New {newType} Order:</h1>
        {/* <Image src={cakeImg}/> */}
        {newType === 'Cookie' && 
            <FormRadioContainer
            radioArray={cookieRadioArray}
            setState={setCookieSelection}
            state={cookieSelection}
            prompt={'Would you like cookies or a cookie cake?'}
            />
        }
        
        {newType === 'Cake' && 
            <FormRadioContainer
            radioArray={cakeRadioArray}
            setState={setCakeSelection}
            state={cakeSelection}
            prompt={'What size cake would you like?'}
            />
        }

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