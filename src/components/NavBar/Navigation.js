// import { Suspense } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectisLogin } from 'redux/selectors';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/auth/thunk';
import UserMenu from 'components/UserMenu/UserMenu';
import animatedGif from '../images/game-phone.gif';
import animatedGifHome from '../images/verisure-house.gif';

export default function Navigation() {
  const navigate = useNavigate();
  const authUserName = useSelector(selectisLogin);

  // const dispatch = useDispatch();

  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };

  useEffect(() => {
    if (authUserName) {
      currentUserThunk();
    }
  }, [authUserName, navigate]);

  return (
    <div className={css.navigation}>
      <header className={css.header}>
        <nav className={css.headerList}>
          {
            <NavLink className={css.headerLink} to="/">
              Home{' '}
              <img
                src={animatedGifHome}
                alt="Анимированная GIF"
                height={30}
                width={30}
              />
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
            ''
          )}
          {authUserName && (
            <NavLink className={css.headerLink} to="/contacts">
              Contacts
              <img
                src={animatedGif}
                alt="Анимированная GIF"
                height={50}
                width={50}
              />
            </NavLink>
          )}
        </nav>
        {authUserName && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
