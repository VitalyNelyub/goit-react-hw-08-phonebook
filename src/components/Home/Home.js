import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.home}>
      <h1 className={css.homeTitle}>Welcome to the phonebook app!</h1>
    </div>
  );
}
