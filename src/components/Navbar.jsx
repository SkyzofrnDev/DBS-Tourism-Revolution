import React, { useState, useEffect } from 'react';
import { ButtonAuth, ButtonNav } from './Index.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', linkTo: '/' },
  { name: 'Article', linkTo: '/Article' },
  { name: 'Source Code', linkTo: '#about' },
  { name: 'Destinations', linkTo: '/destinations' },
];

const buttonAuth = [
  { name: 'Login', linkTo: '/login' },
  { name: 'Register', linkTo: '/register' },
];

const Navbar = () => {
  const token = localStorage.getItem('token');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className={`py-5 h-fit flex items-center z-50 fixed bg-[#000000a0] w-full shadow-lg transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 10,
          duration: 0.6,
        }}
        className="flex w-screen center justify-between px-20 items-center"
      >
        <div>
          <p className="text-white text-2xl font-bold italic">VistaNusa.</p>
        </div>
        <div className="flex gap-5">
          {navItems.map((item, index) => (
            <ButtonNav key={index} name={item.name} linkTo={item.linkTo} />
          ))}
        </div>
        <div className="flex gap-5">
          {token ? (
            <Link to="/userprofile" className="px-3 py-3 rounded-full hover:bg-white/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M14.5 0C16.4228 0 18.2669 0.763837 19.6265 2.12348C20.9862 3.48311 21.75 5.32718 21.75 7.25C21.75 9.17282 20.9862 11.0169 19.6265 12.3765C18.2669 13.7362 16.4228 14.5 14.5 14.5C12.5772 14.5 10.7331 13.7362 9.37348 12.3765C8.01384 11.0169 7.25 9.17282 7.25 7.25C7.25 5.32718 8.01384 3.48311 9.37348 2.12348C10.7331 0.763837 12.5772 0 14.5 0ZM14.5 18.125C22.5113 18.125 29 21.3694 29 25.375V29H0V25.375C0 21.3694 6.48875 18.125 14.5 18.125Z" fill="white" />
              </svg>
            </Link>
          ) : (
            buttonAuth.map((item, index) => (
              <ButtonAuth key={index} name={item.name} linkTo={item.linkTo} />
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
