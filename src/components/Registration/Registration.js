import React from 'react';
import css from './Registration.module.css';
import { createNewUser } from 'service/fetchBackend';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';

export default function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitSignUp = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    createNewUser(newUser).then(response => {
      if (response.status === 201) {
        navigate('/');
        dispatch(
          loginThunk({ email: newUser.email, password: newUser.password })
        );
      }
    });
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
  };

  return (
    <form className={css.registrationForm} onSubmit={handleSubmitSignUp}>
      <label className={css.registrationFormLabel}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className={css.registrationFormInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.registrationFormLabel}>
        E-Mail
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className={css.registrationFormInput}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label className={css.registrationFormLabel}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className={css.registrationFormInput}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit" className={css.registrationFormBtn}>
        Sign up
      </button>
    </form>
  );
}

