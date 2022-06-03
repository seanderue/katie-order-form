import React from 'react'

export default function FormInput({placeholder, updateState}) {

    return (
    <input
        className='form__field'
        type='input'
        placeholder={placeholder} 
        onChange={e => updateState(e.target.value)}
    />
    )
}
