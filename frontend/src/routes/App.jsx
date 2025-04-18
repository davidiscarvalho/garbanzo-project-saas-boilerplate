import { Routes, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Privacy from '../pages/Privacy';
import Pricing from '../pages/Pricing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';
import UserDetails from '../pages/UserDetails';
import Wallet from '../pages/Wallet';
import APIDocs from '../pages/APIDocs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<UserDetails />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/api-docs" element={<APIDocs />} />
    </Routes>
  );
};

export default App;
