import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors';
import css from './UserMenu.module.css'

export default function UserMenu() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <p className={css.userTitle}>Hello, '{currentUser.name}'</p>
    </div>
  );
}
