import { useDispatch } from 'react-redux';
import css from './Login.module.css';
import { loginThunk } from 'redux/auth/thunk';
import { useNavigate } from 'react-router-dom';
// import { selectCurrentUser} from 'redux/selectors';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = e => {
    e.preventDefault();
    const loginCurrentUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginThunk(loginCurrentUser));
    navigate('/');
    e.target.email.value = '';
    e.target.password.value = '';
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmitLogin}>
      <label className={css.loginFormLabel}>
        E-Mail
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className={css.loginFormInput}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label className={css.loginFormLabel}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className={css.loginFormInput}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit" className={css.loginFormBtn}>
        Log in
      </button>
    </form>
  );
}
