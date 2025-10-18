import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

// eslint-disable-next-line react/prop-types
const Header = ({ loginCSS, signupCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header site-header--absolute is--white py-3 mt-4'
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <Logo light={light} />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            color={navColor}
          />
          {/* Header Navigation */}
          {/* Responsive Off-canvas Menu Button */}
          <div className='block lg:hidden'>
            <button
              onClick={() => setMobileMenu(true)}
              className={`mobile-menu-trigger ${
                light ? 'is-white' : 'is-black'
              }`}
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
