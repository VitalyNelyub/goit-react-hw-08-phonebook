import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { createContactsThunk } from 'redux/thunks';



const NOW = new Date();

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContactBtn = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      phone: e.target.number.value,
      id: nanoid(),
      createdAt: `${NOW}`,
    };
    if (contacts.find(contact => contact.name === newContact.name)) {
      Report.failure('Attention', 'This contact is in your phonebook', 'Okay');
    } else {
      dispatch(createContactsThunk(newContact));
      Notify.success('The contact was successfully added');
    }
    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <form onSubmit={addContactBtn} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className={css.form__input}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter number 111-22-33"
          className={css.form__input}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.form__btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propType = {
  addContact: PropTypes.func.isRequired,
};
