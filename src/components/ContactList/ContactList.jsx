import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { getFilteredContacts } from 'redux/contacts/contactsOperation';
import ContactItem from 'components/ContactItem/ContactItem';

const ContatList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts?.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContatList;
