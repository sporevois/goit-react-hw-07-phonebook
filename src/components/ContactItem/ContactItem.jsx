import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { LoaderRotatingLines } from 'components/Loader/Loader';
import styles from '../ContactItem/ContactItem.module.css';
const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();

  return (
    <>
      {error && <b>Request failed with Error code {error.originalStatus}</b>}
      <li className={styles.item}>
        {name}: {number}
        <button
          className={styles.btn}
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          {isLoading ? (
            <span>
              Deleting...
              <LoaderRotatingLines />
            </span>
          ) : (
            'Delete'
          )}
        </button>
      </li>
    </>
  );
};
export default ContactItem;
