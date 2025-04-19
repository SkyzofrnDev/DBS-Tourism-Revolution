import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Navbar } from './components/Index';
import {
  LandingPage,
  Login,
  Register,
  AllDestination,
  Article,
  Destinations,
  UserProfile,
  AddArticle,
  ListArticle,
  RegionAll,
  AllProvinces,
  DestinationsRegion,
  Category,
  CategoryDestinations,
  ProvinceDestinations,
} from './Pages/Index';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/register';
  const isProfile = location.pathname === '/userprofile';
  const isAddArticle =
    location.pathname === '/addarticle' || location.pathname === '/AddArticle';

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destinations" element={<AllDestination />} />
        <Route path="/destinations/:slug" element={<Destinations />} />
        <Route path="/articles" element={<ListArticle />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/addarticle" element={<AddArticle />} />
        <Route path="/provinces" element={<AllProvinces />} />
        <Route path="/regionall" element={<RegionAll />} />
        <Route path="/provinces/:slug" element={<ProvinceDestinations />} />
        <Route path="/destinationsregion" element={<DestinationsRegion />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/:slug" element={<CategoryDestinations />} />
      </Routes>
      {!isAuthPage && !isProfile && !isAddArticle && <Footer />}
    </>
  );
}

export default App;
