import React, { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import TypeButtonSection from './TypeButtonSection'
import FormFields from './FormFields'
// import FormStatus from './FormStatus'
import FormSubmitted from './FormSubmitted'
import Alert from './Alert'


export default function Form({menuOpen}) {

    const [pageNumber, setPageNumber] = useState(1)

    const [newName, setNewName] = useState('')
    const [newType, setNewType] = useState('')
    const [newQuantity, setNewQuantity] = useState()
    const [newFlavor, setNewFlavor] = useState('')
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
            flavor: newFlavor,
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

    const handleRestartPage = (event) => {
        event.preventDefault()
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
        <div className={menuOpen? 'form__container menu-open' : 'form__container'}>
            {/* <FormStatus
                pageNumber = {pageNumber}/>*/}
            <Alert message={`${width} x ${height}`}/>
                <form className='form__group field'onSubmit={handleSubmit}>
                    {pageNumber === 1 &&
                        <TypeButtonSection 
                            newType={newType}
                            setNewType={setNewType}
                        />}
                    {pageNumber === 2 && 
                        <FormFields
                            newType={newType}
                            setNewOccasion={setNewOccasion}
                            setNewTheme={setNewTheme}
                            setnewFlavor={setNewFlavor}
                            setNewDescription={setNewDescription}
                            setNewQuantity={setNewQuantity}  
                            setNewName={setNewName}
                            setNewEmail={setNewEmail}
                            setNewPhone={setNewPhone}
                            setNewPickup={setNewPickup}
                            setNewFlavor={setNewFlavor}
                        />}
                    {pageNumber === 3 &&
                    <FormSubmitted />}
                    {<div className={pageNumber >= 2 ? 'form__button-container' : 'form__button-container right'}>
                        {pageNumber >= 2  && <button className='form__nav-btn' onClick={handleRestartPage}>Restart Order </button>}
                        {pageNumber <= 1 && <button className='form__nav-btn' onClick={handleNextPage}>Customize</button>}
                        {pageNumber === 2 && <button className='form__nav-btn'>Submit Order</button>}
                        </div>
                    }
                </form>
        </div>
    </> 
  )
}
