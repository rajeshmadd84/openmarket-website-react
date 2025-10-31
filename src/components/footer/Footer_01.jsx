import { Link } from 'react-router-dom';

const Footer_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top */}
      {/* Removed text slider */}
      {/* Footer Top */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Center */}
        <div className='lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-3 xl:grid-cols-3 xl:gap-20 xl:py-[100px]'>
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            <Link to='/' className='inline-block'>
              <img
                src='assets/img/th-1/om1.svg'
                alt='logo'
                width={240}
                height={180}
              />
            </Link>
            <p>
            Our mission is to to Bring Millions of Indian farmers and all the related stake holdersinto Digital Agri trading ecosystem.
            </p>
           
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Address
            </h4>
            {/* Footer Title */}
            <address className='not-italic text-black leading-relaxed space-y-2'>
              <div className='text-xl font-bold'>Cropwings Technologies Pvt. Ltd.</div>
              <div className='text-xl'>4A, Ten Madhapur</div>
              <div className='text-xl'>500081, Hyderabad, India</div>
            </address>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Social media
            </h4>
            {/* Footer Title */}
            <div className='flex items-center gap-4'>
              <Link
                rel='noopener noreferrer'
                target='_blank'
                to='https://www.facebook.com'
                className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-colorOMBlue transition-all duration-300 hover:bg-colorViolet'
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
                to='https://www.instagram.com'
                className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-colorOMBlue transition-all duration-300 hover:bg-colorViolet'
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
                to='https://www.linkedin.com'
                className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-colorOMBlue transition-all duration-300 hover:bg-colorViolet'
              >
                <img
                  src='assets/img/th-1/linkedin-icon-white.svg'
                  alt='linkedin'
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>
          {/* Footer Widget */}
        </div>
        {/* Footer Center */}
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Bottom */}
        <div className='py-9 text-center'>
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Cropwings Technologies Pvt. Ltd.
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
    </footer>
  );
};

export default Footer_01;
