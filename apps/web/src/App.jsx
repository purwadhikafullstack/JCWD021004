import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './pages/home/Home';
import Signup from './pages/signup';
import Verification from './pages/email-verification/index';
import Signin from './pages/signin/index';
import RequestPasswordReset from './pages/request-password-reset/index';
import ResetPassword from './pages/reset-password/index';

function App() {
  return (
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/email-verification" element={<Verification />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/password-reset-request"
            element={<RequestPasswordReset />}
          />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default App;
