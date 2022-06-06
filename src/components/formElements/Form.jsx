import React, { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import TypeButtonSection from './TypeButtonSection'
import FormCustomization from './FormCustomization'
import FormStatus from './FormStatus'
import FormContact from './FormContact'
import FormSubmitted from './FormSubmitted'
import Alert from './Alert'


export default function Form() {

    const [pageNumber, setPageNumber] = useState(1)

    const [newName, setNewName] = useState('')
    const [newType, setNewType] = useState('')
    const [newQuantity, setNewQuantity] = useState()
    const [newDescription, setNewDescription] = useState('')
    const [newTheme, setNewTheme] = useState('')
    const [newOccasion, setNewOccasion] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newPickup, setNewPickup] = useState('')
    const [newPhoto, setNewPhoto] = useState('')

    const [orders, setOrders] = useState([])
    const ordersCollectionRef = collection(db, "orders")

    const createOrder = async () => {
        await addDoc(ordersCollectionRef, 
            {
            name: newName,
            type: newType,
            quantity: newQuantity,
            description: newDescription,
            theme: newTheme,
            occasion: newOccasion,
            email: newEmail,
            phone: newPhone,
            pickup: newPickup,
            photo: newPhoto
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createOrder()
        setPageNumber(pageNumber + 1)
        console.log("Order submitted")
    }

    useEffect(() => {
        const getOrders = async () => {
            const data = await getDocs(ordersCollectionRef)
            setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
            console.log(orders)
        }

        getOrders()

    }, [])
    
    const handleNextPage = (event) => {
        event.preventDefault()
        if(pageNumber < 5) {
            setPageNumber(pageNumber + 1)
        }
    }

    const handlePreviousPage = (event) => {
        event.preventDefault()
        if(pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    return (
    <>
        <div className='form__container'>
            <FormStatus
                pageNumber = {pageNumber}/>
            {/* <Alert message="We've got a special on our popsicles"/> */}
                <form className='form__group field'onSubmit={handleSubmit}>
                    {pageNumber === 1 &&
                        <TypeButtonSection 
                        newType={newType}
                        setNewType={setNewType}
                        />}
                    {pageNumber === 2 && 
                    <FormCustomization
                    setNewOccasion={setNewOccasion}
                    setNewTheme={setNewTheme}
                    setNewDescription={setNewDescription}
                    setNewQuantity={setNewQuantity}  
                    />}
                    {pageNumber === 3 && 
                    <FormContact 
                    setNewName={setNewName}
                    setNewEmail={setNewEmail}
                    setNewPhone={setNewPhone}
                    setNewPickup={setNewPickup}
                    />}
                    {pageNumber === 4 &&
                    <FormSubmitted />}
                    {<div className={pageNumber >= 2 ? 'form__button-container' : 'form__button-container right'}>
                        {pageNumber >= 2 && pageNumber < 4 && <button className='form__nav-btn' onClick={handlePreviousPage}>Previous Page </button>}
                        {pageNumber < 3 && <button className='form__nav-btn' onClick={handleNextPage}>{pageNumber == 1 && 'Customize'}{pageNumber >= 2 && 'Contact'}</button>}
                        {pageNumber === 3 && <button className='form__nav-btn'>Submit Order</button>}
                        {pageNumber === 4 && <button className='form__nav-btn'>Restart Order</button>}
                        </div>
                    }
                </form>
        </div>
    </> 
  )
}
