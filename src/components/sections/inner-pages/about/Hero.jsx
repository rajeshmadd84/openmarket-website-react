const Hero = () => {
  return (
    <section id='about-hero-section'>
      {/* Section Spacer */}
      <div className='mb-20 lg:mb-24'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-12 xl:mb-20'>
            <div className='mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]'>
              <h2 className='text-colorOMBlue'>Our Vision</h2>
              <h4 className='mt-4'>To make agri trade as effortless, reliable, and transparent as digital payments in India.</h4>
            </div>
          </div>
          {/* Section Content Block */}
          {/* About Hero Image */}
          <div
            className='jos overflow-hidden rounded-3xl'
            data-jos_animation='zoom'
          >
            <img
              src='assets/img/th-1/about-hero-image.jpg'
              alt='about-hero-image'
              width={1296}
              height={650}
              className='h-full w-full object-cover'
            />
          </div>
          {/* About Hero Image */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Hero;
