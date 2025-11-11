import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          const replayPromise = video.play();
          if (replayPromise !== undefined) {
            replayPromise.catch(() => {/* autoplay prevented */});
          }
        }
      }, 3000);
    };

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {/* autoplay prevented */});
    }
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

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
                <h3 className='jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px] text-colorOMBlue'>
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
                    className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOMBlue hover:border-colorOMBlue hover:text-white'
                  >
                    Get started for free
                  </Link>
                 
                </div>
              </div>
              <div
                className='jos hero-img overflow-hidden rounded-2xl bg-black order-1 lg:order-2'
                data-jos_animation='zoom'
              >
                <video
                  ref={videoRef}
                  src='assets/video/hero.mp4'
                  poster='assets/img/th-1/hero-dashboard.png'
                  className='h-full w-full object-cover'
                  autoPlay
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
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
