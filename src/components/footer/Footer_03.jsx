import { Link } from 'react-router-dom';

const Footer_03 = () => {
  return (
    <footer id='section-footer-3'>
      <div className='bg-colorOMBlue text-white'>
        {/* Section Spacer */}
        <div className='py-20 xl:py-[130px]'>
          {/* Footer Top */}
          <div>
            {/* Section Container */}
            <div className='global-container'>
              {/* Footer Content */}
              <div className='grid-col-1 grid items-center gap-10 md:grid-cols-2'>
                {/* Section Content Block */}
                <div>
                  <h1 className='font-raleway text-white'>Let’s talk</h1>
                </div>
                {/* Section Content Block */}
                <div className='jos flex flex-col gap-10 md:gap-[50px]'>
                  <p className='text-lg font-semibold leading-[1.33] md:text-xl lg:text-2xl'>
                  Our mission is to to Bring Millions of Indian farmers and all the related stake holdersinto Digital Agri trading ecosystem.
                  </p>
                </div>
              </div>
              {/* Footer Content */}
              {/* Footer Contact */}
              <div className='mt-11 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl'>
                  <a href='mailto:connect@openmarket.ag'>connect@openmarket.ag</a>
                </div>
                <div className='rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl'>
                  <a href='tel:+91 9876543210'>+91 9876543210</a>
                </div>
                <div className='rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl'>
                  <address className='not-italic'>
                    4A, Ten Madhapur, Hyderabad, India
                  </address>
                </div>
              </div>
              {/* Footer Contact */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Top */}
          {/* Footer Bottom */}
          <div className='mt-[100px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Footer Widgets Block */}
              <div className='grid gap-8 md:grid-cols-3 items-center'>
                {/* Footer Widget - Logo */}
                <div className='flex justify-center md:justify-start'>
                  <Link to='/' className='inline-block'>
                    <img
                      src='assets/img/logo-light.png'
                      alt='logo'
                      width={96}
                      height={24}
                    />
                  </Link>
                </div>
                {/* Footer Widget - Social Media */}
                <div className='flex justify-center gap-4'>
                  <Link
                    rel='noopener noreferrer'
                    target='_blank'
                    to='http://www.facebook.com'
                    className='flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 hover:bg-colorViolet'
                  >
                    <img
                      src='assets/img/th-1/facebook-icon-white.svg'
                      alt='facebook'
                      width={14}
                      height={14}
                    />
                  </Link>
                  <Link
                    rel='noopener noreferrer'
                    target='_blank'
                    to='http://www.twitter.com'
                    className='flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 hover:bg-colorViolet'
                  >
                    <img
                      src='assets/img/th-1/twitter-icon-white.svg'
                      alt='twitter'
                      width={14}
                      height={14}
                    />
                  </Link>
                  <Link
                    rel='noopener noreferrer'
                    target='_blank'
                    to='http://www.instagram.com'
                    className='flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 hover:bg-colorViolet'
                  >
                    <img
                      src='assets/img/th-1/instagram-icon-white.svg'
                      alt='instagram'
                      width={14}
                      height={14}
                    />
                  </Link>
                  <Link
                    rel='noopener noreferrer'
                    target='_blank'
                    to='http://www.linkedin.com'
                    className='flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 hover:bg-colorViolet'
                  >
                    <img
                      src='assets/img/th-1/linkedin-icon-white.svg'
                      alt='linkedin'
                      width={14}
                      height={14}
                    />
                  </Link>
                </div>
                {/* Footer Widget - Copyright */}
                <div className='text-center md:text-right'>
                  <p>
                    © {new Date().getFullYear()} Openmarket.ag. All Rights Reserved.
                  </p>
                </div>
              </div>
              {/* Footer Widgets Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Bottom */}
        </div>
        {/* Section Spacer */}
      </div>
    </footer>
  );
};

export default Footer_03;
