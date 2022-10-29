import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { getFilteredContacts } from 'redux/contacts/contactsTools';
import ContactItem from 'components/ContactItem/ContactItem';
import { LoaderThreeDots } from 'components/Loader/Loader';

const ContatList = () => {
  const { data: contacts, isLoading, error } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {isLoading && <LoaderThreeDots />}
      {error && <b>Request failed with Error code {error.originalStatus}</b>}
      <ul>
        {filteredContacts?.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContatList;
