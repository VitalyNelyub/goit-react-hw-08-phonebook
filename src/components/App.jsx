// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './Contacts/ContactList';
// import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';
// import css from './ContactForm/ContactForm.module.css';
// import { useSelector } from 'react-redux';
// import { selectLoader } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import Navigation from './NavBar/Navigation';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Home from './Home/Home';
import ContactsList from './ContactsList/Conatcts';
import NotFound from './NotFound/NotFound';


export default function App() {
  // const loader = useSelector(selectLoader);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsList />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
