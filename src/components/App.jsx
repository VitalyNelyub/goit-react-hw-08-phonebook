import { Route, Routes } from 'react-router-dom';
import Navigation from './NavBar/Navigation';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import ContactsFormBackend from './contactsFormBackend/contactFormBackend';


export default function App() {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsFormBackend />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
