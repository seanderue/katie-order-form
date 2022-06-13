import React, {useState, useEffect} from 'react'
import { storage } from '../../firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import FormContact from './FormContact'
import FormCustomization from './FormCustomization'

import cookiesImg from '../../../public/cookies-thumbnail.jpeg'
import cookieCakeImg from '../../../public/cookiecake-thumbnail.jpeg'
import cupcakeImg from '../../../public/cupcake-thumbnail.jpeg'
import cakeImg from '../../../public/cake-thumbnail.jpeg'

import FormRadioContainer from './FormRadioContainer'

export default function FormFields({ newType, setNewDescription, setNewQuantity, setNewTheme, setNewOccasion, setNewFlavor, setNewName, setNewEmail, setNewPhone, setNewPickup, setNewImageUrl, setNewTypeOption, newTypeOption}) {
    const [imageUpload, setImageUpload] = useState(null)
    // const [fileName, setFileName] = useState('')

    const uploadImage = () => {
        if (imageUpload == null) return
        // setFileName(imageUpload.name + v4())
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded")
        })
    }

    // const getImageUrl = () => {
    //     if (imageUpload == null) return
    //     getDownloadURL(storage, `images/${fileName}`).then(url => {
    //         setNewImageUrl(url)
    //     })
    // }

    useEffect(() => {
      uploadImage()
    //   getImageUrl()
    
    }, [imageUpload])

    
    const cookieRadioArray = [{
        thumbnail: cookiesImg,
        label: 'Cookies',
        price: '12 for $24'
    }, {
        thumbnail: cookieCakeImg,
        label: 'Cookie Cake',
        price: '$35'
    }]    
    
    const cakeRadioArray = [{
        thumbnail: cakeImg,
        label: '6" Round',
        price: '$38',
        
    }, {
        thumbnail: cakeImg,
        label: '8" Round',
        price: '$50'
    }, {
        thumbnail: cakeImg,
        label: '10" Round',
        price: '$60'
    }]

    const cupcakeRadioArray = [{
        thumbnail: cupcakeImg,
        label: '6 cupcakes',
        price: '$15',
    }, {
        thumbnail: cupcakeImg,
        label: '12 cupcakes',
        price: '$27'
    }]

    const cakesicleRadioArray = [{
        thumbnail: cakeImg,
        price: '$3 per cakesicle',
    }]

    return (
    
    <div className='form__input-container'>
        <h1 style={{'textAlign': 'center'}}>New {newType} Order:</h1>
    
        {newType === 'Cookie' && 
            <FormRadioContainer
            enabled={true}
            radioArray={cookieRadioArray}
            setState={setNewTypeOption}
            state={newTypeOption}
            prompt={'Would you like cookies or a cookie cake?'}
            />
        }
        
        {newType === 'Cake' && 
            <FormRadioContainer
            enabled={true}
            radioArray={cakeRadioArray}
            setState={setNewTypeOption}
            state={newTypeOption}
            prompt={'What size cake would you like?'}
            />
        }

        {newType === 'Cupcake' && 
            <FormRadioContainer
            enabled={true}
            radioArray={cupcakeRadioArray}
            setState={setNewTypeOption}
            state={newTypeOption}
            prompt={'Are you ordering by the half dozen or dozen?'}
            />
        }

        {newType === 'Cakesicle' && 
            <FormRadioContainer
            enabled={false}
            radioArray={cakesicleRadioArray}
            setState={setNewTypeOption}
            state={newTypeOption}
            prompt={''}
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
            setNewImageUrl={setNewImageUrl}
            setImageUpload={setImageUpload}
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