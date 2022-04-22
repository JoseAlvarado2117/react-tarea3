import React, { useRef } from 'react'
import { Contact } from '../../../models/contact.class'

import '../../../styles/ContactForm.scss'


const ContactForm = ({ add }) => {

  const nombreRef = useRef('')
  const apellidoRef = useRef('')
  const emailRef = useRef('')


  function addContact(e) {
    e.preventDefault()

    const newContact = new Contact(
      nombreRef.current.value,
      apellidoRef.current.value,
      emailRef.current.value,
      false
    )
    
    add(newContact)

    // Resetear el form
    nombreRef.current.value=''
    apellidoRef.current.value= ''
    emailRef.current.value= ''
  }

  return (
    <div>
      <h2>New Contact</h2>

      <form
        onSubmit={addContact}
      >
      <p>Los campos obligatorios se marcan con un <abbr title = "required">*</abbr>.</p>

      <div>
        <label htmlFor="nombre">Nombre: <abbr title="required" aria-label="required">*</abbr></label>
        <input 
          ref={nombreRef}
          id="nombre" 
          type="text" 
          name="nombre"
          required
        />
      </div>

      <div>
        <label htmlFor="apellido">Apellido: <abbr title="required" aria-label="required">*</abbr></label>
        <input 
          id="apellido" 
          type="text" 
          name="apellido"
          ref={apellidoRef}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email: <abbr title="required" aria-label="required">*</abbr></label>
        <input 
          id="email" 
          type="email" 
          name="email"
          ref={emailRef}
          required
        />
      </div>
      <div className="btn-block">
        <button type="submit" className="button">Crear Contacto</button>
      </div>
    </form>
    </div>
  )
}

export default ContactForm
