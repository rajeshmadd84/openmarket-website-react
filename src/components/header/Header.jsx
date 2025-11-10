import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

// eslint-disable-next-line react/prop-types
const Header = ({ loginCSS, signupCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header sticky top-0 z-50 bg-white py-2 shadow-sm'
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
          {/* Header Button and Mobile Menu */}
          <div className='flex items-center gap-6'>
            <Link
              to='/contact'
              className='hidden lg:inline-block button rounded-[50px] border-2 border-colorOMBlue bg-colorOMBlue px-6 py-3 text-white transition-all duration-300 hover:bg-transparent hover:text-colorOMBlue'
            >
              Get started
            </Link>
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
      </div>
    </header>
  );
};

export default Header;
