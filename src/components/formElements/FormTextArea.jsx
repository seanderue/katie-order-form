import React from 'react'

export default function FormTextArea({placeholder, updateState, state}) {
  return (
    <textarea 
        className='form__field'
        placeholder={placeholder}
        onChange={e => updateState(e.target.value)}
        value={state}/>
  )
}
