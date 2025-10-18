import { Link } from 'react-router-dom';

const Footer_03 = () => {
  return (
    <footer id='section-footer-3'>
      <div className='bg-colorOMBlue text-white'>
        {/* Section Spacer */}
        <div className='py-10 xl:py-[60px]'>
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
              <div className='mt-11 grid grid-cols-1 gap-8 md:grid-cols-3'>
                <div className='text-left'>
                  <h4 className='mb-3 text-lg font-bold text-white uppercase'>Email:</h4>
                  <a href='mailto:connect@openmarket.ag' className='text-2xl font-semibold text-white transition-all duration-300 hover:text-colorOrangyRed'>
                    connect@openmarket.ag
                  </a>
                </div>
                <div className='text-left'>
                  <h4 className='mb-3 text-lg font-bold text-white uppercase'>Phone:</h4>
                  <a href='tel:+91 9876543210' className='text-2xl font-semibold text-white transition-all duration-300 hover:text-colorOrangyRed'>
                    +91 9876543210
                  </a>
                </div>
                <div className='text-left'>
                  <h4 className='mb-3 text-lg font-bold text-white uppercase'>Address:</h4>
                  <address className='not-italic text-2xl font-semibold text-white'>
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
                      src='assets/img/om-footer.svg'
                      alt='logo'
                      width={192}
                      height={48}
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
