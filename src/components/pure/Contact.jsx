import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, conectadoContact, deleteContact }) => {


  function contactCompletedIcon() {
    if( contact.conectado) {
      return (<i onClick={() => conectadoContact(contact)} className="bi-toggle-on contact-action" style={{ color: 'green', fontSize: '1.4rem'}}></i>)
    } else {
      return (<i onClick={() => conectadoContact(contact)} className="bi-toggle-off contact-action" style={{ color: '#ff4b69', fontSize: '1.4rem'}}></i>)
    }
  }

  return (
    <tr>
      <th>{contact.nombre}</th>
      <th>{contact.apellido}</th>
      <th>{contact.email}</th>
      <th>{contact.conectado ? 'Conectado' : 'Desconectado'}</th>
      <th className="acciones">
        {contactCompletedIcon()}
        <i onClick={() => deleteContact()} className="bi-trash" style={{ color: 'tomato', fontSize: '1.2rem'}}></i>
      </th>
  </tr>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
