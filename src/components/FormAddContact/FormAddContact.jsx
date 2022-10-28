import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';
import { isDublicate } from 'redux/contacts/contactsOperation';
import styles from '../FormAddContact/FormAddContact.module.css';

const FormAddContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isFetching, error }] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = async event => {
    event.preventDefault();
    if (isDublicate(name, contacts)) {
      return alert(`${name} is already in contacts.`);
    }
    await addContact({ name, phone });
    setName('');
    setPhone('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      default:
        return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.title}>
        Name
        <input
          className={styles.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.title}>
        Number
        <input
          className={styles.field}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default FormAddContact;
