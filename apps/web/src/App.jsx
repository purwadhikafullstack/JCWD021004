import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Auth from './components/Auth/Auth';
import Home from './pages/home/Home';
import Signup from './pages/signup';
import Verification from './pages/email-verification/index';

function App() {
  return (
    <BrowserRouter>
      {/* <Auth> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/email-verification" element={<Verification />} />
      </Routes>
      {/* </Auth> */}
    </BrowserRouter>
  );
}

export default App;
