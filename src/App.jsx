import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Navbar } from './components/Index';
import { LandingPage, Login, Register, Region } from './Pages/Index';

function App() {
  const location = useLocation(); 
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destination" element={<Region/>} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
