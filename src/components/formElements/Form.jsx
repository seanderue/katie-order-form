import React, { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import TypeButtonSection from './TypeButtonSection'
import FormFields from './FormFields'
import toast, { Toaster } from 'react-hot-toast'
import FormSubmitted from './FormSubmitted'


export default function Form({menuOpen}) {

    const [pageNumber, setPageNumber] = useState(1)

    const [newName, setNewName] = useState('')
    const [newType, setNewType] = useState('')
    const [newQuantity, setNewQuantity] = useState(0)
    const [newFlavor, setNewFlavor] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newTheme, setNewTheme] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newPickup, setNewPickup] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')
    const [newTypeOption, setNewTypeOption] = useState('')

    const ordersCollectionRef = collection(db, "orders")

    const createOrder = async () => {
        await addDoc(ordersCollectionRef, 
            {
            name: newName,
            type: newType,
            typeOption: newTypeOption,
            flavor: newFlavor,
            quantity: newQuantity,
            description: newDescription,
            theme: newTheme,
            email: newEmail,
            phone: newPhone,
            pickup: newPickup,
            photo: newImageUrl
        })
    }

    const emailCollectionRef = collection(db, "mail")

    const sendEmail = async () => {
        await addDoc(emailCollectionRef,
            {
                to: ['seanderue@gmail.com', 'contact.katieannskitchen@gmail.com'],
                message: {
                    subject: 'You have a new order!',
                    html: 
                    `<h1>New order from ${newName}</h1>
                    <p><b>Order type:</b> ${newType} (${newTypeOption}) </p>
                    <p><b>Order flavor:</b> ${newFlavor}</p>
                    <p><b>Order quantity:</b> ${newQuantity}</p>
                    <p><b>Order description:</b> ${newDescription}</p>
                    <p><b>Order theme:</b> ${newTheme}</p>
                    <p><b>Contact email:</b> ${newEmail}</p>
                    <p><b>Contact phone:</b> ${newPhone}</p>
                    <p><b>Preferred Pickup:</b> ${newPickup}</p>
                    <p><b>Reference photo:</b> <a href="https://console.firebase.google.com/u/0/project/katie-order-form/storage/katie-order-form.appspot.com/files"> Can be here (I'll fix this later) </a></p>

                    <p><i>(Proud of you ~Sean ❤️)!</i></p>
                    `
                }
            }) 
        .then(() => console.log("Queued email for delivery!"));
    }

    <img />
    const handleSubmit = (e) => {
        e.preventDefault()

        if (pageNumber === 2 && hasEmptyFormFields) {
            toast.error('Please fill out all fields')
            // setAlert('Please fill out all fields')
            return
        }

        if (pageNumber === 2 && newQuantity < 0 || newQuantity > 100 || newQuantity === '') {
            toast.error('Please choose a valid quantity')
            // setAlert('Please choose a valid quantity')
            return
        }

        createOrder()
        sendEmail()
        setPageNumber(pageNumber + 1)
        console.log("Order submitted")
    }

    // Retrieving orders from Firebase
    // useEffect(() => {
    //     const getOrders = async () => {
    //         const data = await getDocs(ordersCollectionRef)
    //         setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    //     }

    //     getOrders()

    // }, [])

    const hasEmptyFormFields = newFlavor === '' || newDescription === '' || newName == '' || newEmail === '' || newPhone === '' || newPickup === ''

    const handleNextPage = (event) => {
        if (newType === '') {
            return
        }

        if(pageNumber < 5) {
            setTimeout(()=>setPageNumber(pageNumber + 1), 500)
        }
    }

    const handleRestartPage = (event) => {
        event.preventDefault()

        setNewName('')
        setNewType('')
        setNewQuantity(0)
        setNewFlavor('')
        setNewDescription('')
        setNewTheme('')
        setNewEmail('')
        setNewPhone('')
        setNewPickup('')
        setNewImageUrl('')
        setNewTypeOption('')


        if(pageNumber > 1) {
            setPageNumber(1)
        }
    }

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



    return (
    <>
        <Toaster
            position='top-center'
            reverseOrder={false}
        />
        <div className={menuOpen? 'form__container menu-open' : 'form__container'}>
            {/* <FormStatus
                pageNumber = {pageNumber}/>*/}

                <form className='form__group field'onSubmit={handleSubmit}>
                    {pageNumber === 1 &&
                        <TypeButtonSection 
                            handleNextPage={handleNextPage}
                            newType={newType}
                            setNewType={setNewType}
                        />}
                    {pageNumber === 2 && 
                        <FormFields
                            newType={newType}
                            newTypeOption={newTypeOption}
                            setNewTypeOption={setNewTypeOption}
                            setNewTheme={setNewTheme}
                            setnewFlavor={setNewFlavor}
                            setNewDescription={setNewDescription}
                            setNewQuantity={setNewQuantity}  
                            setNewName={setNewName}
                            setNewEmail={setNewEmail}
                            setNewPhone={setNewPhone}
                            setNewPickup={setNewPickup}
                            setNewFlavor={setNewFlavor}
                            setNewImageUrl={setNewImageUrl}
                        />}
                    {pageNumber === 3 &&
                    <FormSubmitted />}
                    {<div className={pageNumber >= 2 ? 'form__button-container' : 'form__button-container right'}>
                        {pageNumber >= 2  && <button className='form__nav-btn' onClick={handleRestartPage}>Restart Order </button>}
                        {/* {pageNumber <= 1 && <button className='form__nav-btn' onClick={handleNextPage}>Customize</button>} */}
                        {pageNumber === 2 && <button className='form__nav-btn'> Submit Order</button>}
                        </div>
                    }
                </form>
        </div>
    </> 
  )
}
