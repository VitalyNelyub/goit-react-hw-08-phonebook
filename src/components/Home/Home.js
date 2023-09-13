import css from './Home.module.css';
import animatedGifHome from '../images/phone.gif';

export default function Home() {
  return (
    <div className={css.home}>
      <h1 className={css.homeTitle}>Welcome to the phonebook app!</h1>
      <img
        src={animatedGifHome}
        alt="Анимированная GIF"
        height={260}
        width={250}
      />
    </div>
  );
}
