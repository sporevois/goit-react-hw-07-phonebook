import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import styles from '../ContactItem/ContactItem.module.css';
const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();

  return (
    <>
      {error && <b>{error.message}</b>}
      <li className={styles.item}>
        {name}: {number}
        <button
          className={styles.btn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          {isLoading ? 'Deleting...' : 'Delete'}
        </button>
      </li>
    </>
  );
};
export default ContactItem;
