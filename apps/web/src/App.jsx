import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Auth from './components/Auth/Auth';
import Home from './pages/home/Home';
import Signup from './pages/signup';

function App() {
  return (
    <BrowserRouter>
      {/* <Auth> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* </Auth> */}
    </BrowserRouter>
  );
}

export default App;
