import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './pages/home/Home';
import Signup from './pages/signup';
import Verification from './pages/email-verification/index';
import SigninUser from './pages/signin/signin-user';
import SigninTenant from './pages/signin/signin-tenant';
import RequestPasswordReset from './pages/request-password-reset/index';
import ResetPassword from './pages/reset-password/index';
import Profile from './pages/profile/Index';
import SigninScreen from './pages/signin-screen';
import { LoggedInRoute } from './components/Auth/ProtectedRoute';
import PropertyDetail from './pages/property-detail';
import SignupTenant from './pages/signup-tenant';
import SignDataTenant from './pages/sign-data-tenant';
import PropertyList from './pages/property-list';
import CreateProperty from './pages/create-property';

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-tenant" element={<SignupTenant />} />
          <Route path="/signdata-tenant" element={<SignDataTenant />} />
          <Route path="/auth/email-verification" element={<Verification />} />
          <Route path="/signin-screen" element={<SigninScreen />} />
          <Route path="/signin-user" element={<SigninUser />} />
          <Route path="/signin-tenant" element={<SigninTenant />} />
          <Route
            path="/password-reset-request"
            element={<RequestPasswordReset />}
          />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route
            path="/profile"
            element={
              <LoggedInRoute>
                <Profile />
              </LoggedInRoute>
            }
          />
          <Route path="/create-property" element={<CreateProperty />} />
          <Route path="/property-list" element={<PropertyList />} />
          <Route path="/property-detail" element={<PropertyDetail />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
