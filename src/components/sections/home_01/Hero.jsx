import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id='section-hero'>
        <div className='relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]'>
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12'>
              <div className='mb-14 flex flex-col items-center text-center lg:mb-20 lg:items-start lg:text-left order-2 lg:order-1'>
                <h4 className='jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
                  Agri Trading is fragmented
                </h4>
                <h3 className='jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px] text-colorOrange'>
                  We are fixing it!
                </h3>
                <p className='jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]'>
                Openmarket changes everything, 
                India's first fully digital platform transforming the way agricultural commodities are bought and sold.  
                </p>
                <div
                  className='jos flex flex-wrap justify-center gap-6 lg:justify-start'
                  data-jos_animation='fade'
                >
                  <Link
                    to='/contact'
                    className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrange hover:border-colorOrangyRed hover:text-white'
                  >
                    Get started for free
                  </Link>
                  <Link
                    to='/about'
                    className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrange hover:border-colorOrangyRed hover:text-white'
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div
                className='jos hero-img overflow-hidden rounded-2xl bg-black order-1 lg:order-2'
                data-jos_animation='zoom'
              >
                <img
                  src='assets/img/th-1/hero-dashboard.jpg'
                  alt='hero-dashboard'
                  width='1296'
                  height='640'
                  className='h-auto w-full'
                />
              </div>
            </div>

          
            
          </div>
         

         
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
