// import { Suspense } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {selectisLogin } from 'redux/selectors';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/auth/thunk';
import { logOut } from 'redux/auth/slice';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Navigation() {
  const navigate = useNavigate();
  const authUserName = useSelector(selectisLogin);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    if (authUserName) {
      currentUserThunk();
    }
  }, [authUserName, navigate]);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.headerList}>
          {
            <NavLink className={css.headerLink} to="/">
              Home
            </NavLink>
          }
          {!authUserName && (
            <NavLink className={css.headerLink} to="/register">
              Registration
            </NavLink>
          )}
          {!authUserName ? (
            <NavLink className={css.headerLink} to="/login">
              Login
            </NavLink>
          ) : (
            <NavLink
              className={css.headerLink}
              onClick={handleLogOut}
              to="/login"
            >
              Log out
            </NavLink>
          )}
          {authUserName && (
            <NavLink className={css.headerLink} to="/contacts">
              Contacts
            </NavLink>
          )}
        </nav>
        {/* {authUserName && <h4>Hello, {authUserName.name}</h4>} */}
         {authUserName && <UserMenu/>}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
