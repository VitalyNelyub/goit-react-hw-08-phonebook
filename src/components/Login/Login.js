import { useDispatch, useSelector } from 'react-redux';
import css from './Login.module.css';
import { currentUserThunk, loginThunk } from 'redux/au/thunk';
import { selectisLogin } from 'redux/selectors';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getCurrentUser } from 'service/fetchBackend';

export default function Login() {
  const isLogin = useSelector(selectisLogin);
  
  console.log(isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch(currentUserThunk());
    }
    // isLogin && dispatch(currentUserThunk());
  }, [dispatch, isLogin]);

  const handleSubmitLogin = e => {
    e.preventDefault();
    const loginCurrentUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // loginUser(loginCurrentUser).then(console.log)
    dispatch(loginThunk(loginCurrentUser));
    // dispatch(currentUserThunk());
    e.target.email.value = '';
    e.target.password.value = '';
    // dispatch(currentUserThunk());
    // console.log(newUser);
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
