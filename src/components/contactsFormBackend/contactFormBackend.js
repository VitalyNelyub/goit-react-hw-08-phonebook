import ContactForm from 'components/ContactForm/ContactForm';
import css from './contactsFormBackend.module.css';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactsList/Conatcts';
import { useSelector } from 'react-redux';
import { selectLoader } from 'redux/selectors';
import Loader from '../Loader/Loader';

export default function ContactsFormBackend() {
  const loader = useSelector(selectLoader);
  return (
    <div className={css.contactForm}>
      <ContactForm />
      <div className={css.form__loader}>
      <h2>Contacts</h2>
        {loader && <Loader />}
        </div>
      <Filter />
      <ul className={css.contactList}>
        <ContactList />
      </ul>
    </div>
  );
}
