import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/slice';
import { NavLink } from 'react-router-dom';
import animatedGifExit from '../images/exit.gif';

export default function UserMenu() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userSignup}>
      <p className={css.userTitle}>
        {currentUser.name || currentUser.user.name}
      </p>
      <img
        src={
          'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'
        }
        alt={currentUser.user.name}
        width={60}
        height={60}
      />
      <NavLink
        className={css.headerLinkExit}
        onClick={handleLogOut}
        to="/login"
      >
        Log out
        {/* <img
          src={'https://cdn-icons-png.flaticon.com/512/1435/1435366.png'}
          alt={currentUser.user.name}
          height={50}
          width={50}
        /> */}
        <img
          src={animatedGifExit}
          alt="Анимированная GIF"
          height={60}
          width={50}
        />
      </NavLink>
    </div>
  );
}
