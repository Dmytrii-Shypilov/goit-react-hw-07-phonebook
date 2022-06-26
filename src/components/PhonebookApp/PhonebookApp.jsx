import style from './phonebook-app.module.css';

import { getContacts, getLoader, getError } from 'redux/contacts/contacts-selector';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/contacts/contacts-operations';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const PhonebookApp = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const  items  = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoader, shallowEqual);
  const error = useSelector(getError, shallowEqual)
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const putContact = newData => {
    dispatch(addContact(newData));
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const filterChange = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContactsList = () => {
    if (!filter) {
      return items;
    }
    const filterQuery = filter.toLowerCase();
    const filteredItems = items.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery)
    );
    return filteredItems;
  };

  const filteredContacts = getFilteredContactsList();
  return (
    <div className={style.bookSection}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmit={putContact} />

      <h2 className={style.title}>Contacts</h2>
      <Filter filterChange={filterChange} />
      {error && <p>Some error took place... Please, try again;</p>}
      {loading && <p>..Loading</p>}
      {items.length>0 && <ContactList contacts={filteredContacts} deleteContact={deleteContact} />}
    </div>
  );
};

export default PhonebookApp;
