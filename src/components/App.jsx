import React, { Component } from 'react';

import Contacts from './Contacts';

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
    this.setState(prevState => 
      ({contacts: prevState.contacts.filter(contact => contact.id !== id)})
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Contacts contacts={this.state.contacts} onClick={this.deleteContact} />
      </>
    );
  }
}

export default App;
