import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactsList/Conatcts';
import css from './contactsFormBackend.module.css';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactsList/Conatcts';
// import ContactList from "components/Contacts/ContactList";

export default function ContactsFormBackend() {
  return (
    <div className={css.contactForm}>
      <ContactForm />
      <Filter />
      <ul className={css.contactList}>
        <ContactList />
      </ul>
    </div>
  );
}
