import React, { Component } from 'react';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';

// import contacts from '../../data/contacts';
const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addNewContact = newContact => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const { addNewContact, ChangeFilter, deleteContact } = this;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <>
        <h1>Phonebook</h1>
        <Form addNewContact={addNewContact} />
        <Filter value={filter} onChange={ChangeFilter} />
        <Contacts contacts={visibleContacts} onClick={deleteContact} />
      </>
    );
  }
}

export default App;
