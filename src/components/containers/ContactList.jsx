import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact'

import '../../styles/contact.scss'
import ContactForm from '../pure/forms/ContactForm';

function ContactListComponent(props) {

  const defaultContact1 = new Contact('Jose', 'Alvarado', 'jose@correo.com', false);
  const defaultContact2 = new Contact('Paola', 'Rodriguez', 'paola@correo.com', true);
  const defaultContact3 = new Contact('Hilda', 'Gonzalez', 'hilda@correo.com', false);
  const defaultContact4 = new Contact('carlos', 'Manrique', 'carlos@correo.com', true);

  const myState = [defaultContact1, defaultContact2, defaultContact3, defaultContact4]

  const [contacts, setContacts] = useState(myState)
  const [loading, setLoading] = useState(true)


  /**
   * 
   * @param { Función para añadir los Contactos} contacto
  */
  function addContact(contact) {
    console.log('Create this contact', contact)
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.push(contact)
    setContacts(tempContacts)
  }

  /**
  * 
  * @param { Función para añadir los Contactos} contacto
  */
  function deleteContact(contact) {
    console.log('Delete this contact', contact)
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.splice(index, 1)
    setContacts(tempContacts)
  }

  /**
   * 
   * @param {Function para completar las tareas} task 
   */
   function conectadoContact(contact) {
    console.log('Connect this contact', contact)
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].conectado = !tempContacts[index].conectado;

    // We update the state of the component and it will update the 
    // iteration of the tasks oin orden to show the tasks upteded 
    setContacts(tempContacts)
  }

  return (
    <div className="container">
      <div className="left">
        <ContactForm add={addContact} />
      </div>
      <div className="right">

        {
          contacts.length > 0
          ? (
            <>

              <h1>Your contacts: </h1>

              {/* TODO: Aplicar un For/Map para renderizar una lista de contactos */}
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Nombre:</th>
                      <th scope="col">Apellido:</th>
                      <th scope="col">Email:</th>
                      <th scope="col">Connection:</th>
                      <th scope="col">Acciones:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      contacts.map((contact ,index) => (
                        <ContactComponent 
                          key={index}
                          contact={contact}
                          conectadoContact={conectadoContact}
                          deleteContact={deleteContact}
                        />
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </>
          )
          : <p style={{ color: '#2A3B47'}}>No hay Contactos, empiece creando uno</p>
        }

      </div>
    </div>
  )
}


export default ContactListComponent

