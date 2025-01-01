import { useState } from 'react'
import Form from '../Components/Form'
import Scrapper from '../Components/Scrapper'

function FormContainer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}>
      <div style={{ border: '2px solid red' }}>
        <Scrapper />
      </div>
      <div style={{ border: '2px solid red' }}>
        <Form />
      </div>
    </div>
  )
}

export default FormContainer
