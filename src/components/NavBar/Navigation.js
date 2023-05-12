// import { Suspense } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import css from './Navigation.module.css';
import {  useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/au/thunk';

export default function Navigation() {
  const navigate = useNavigate();
  const authUserName = useSelector(selectCurrentUser);
  // const dispatch = useDispatch();
  // console.log(authUserName);
  useEffect(() => {
    if (authUserName) {
      currentUserThunk();
      navigate('/contacts');
    }
  }, [authUserName, navigate]);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.headerList}>
          <NavLink className={css.headerLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.headerLink} to="/register">
            Registration
          </NavLink>
          {!authUserName ? (
            <NavLink className={css.headerLink} to="/login">
              Login
            </NavLink>
          ) : (
            <NavLink className={css.headerLink} to="/login">
              Log out
            </NavLink>
          )}
          <NavLink className={css.headerLink} to="/contacts">
            Contacts
          </NavLink>
        </nav>
        {authUserName && <h4>Hello, {authUserName.name}</h4>}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
