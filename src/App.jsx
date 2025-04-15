import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Navbar } from './components/Index';
import {
  LandingPage,
  Login,
  Register,
  Region,
  Article,
  Destinations,
  UserProfile,
  AddArticle,
} from './Pages/Index';

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/register';
  const isProfile =
    location.pathname === '/userprofile';
  const isAddArticle = location.pathname === '/addarticle' || location.pathname === '/AddArticle';
  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destination" element={<Region />} />
        <Route path="/article" element={<Article />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/addarticle" element={<AddArticle />} />
      </Routes>
      {!isAuthPage && !isProfile && !isAddArticle && <Footer />}
    </>
  );
}

export default App;
