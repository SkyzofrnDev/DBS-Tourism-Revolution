import React from 'react';
import { ButtonAuth, ButtonNav } from './Index.jsx';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', linkTo: '#home' },
  { name: 'Gallery', linkTo: '#gallery' },
  { name: 'Package', linkTo: '#package' },
  { name: 'About Us', linkTo: '#about' },
];

const buttonAuth = [
  { name: 'Login', linkTo: '/login' },
  { name: 'Register', linkTo: '/register' },
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping:10,
        duration: 0.6,
      }}
      className="z-50 flex fixed w-screen center justify-between py-5 px-20 items-center "
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
        {buttonAuth.map((item, index) => (
          <ButtonAuth key={index} name={item.name} linkTo={item.linkTo} />
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
