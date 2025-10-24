import { Link } from 'react-router-dom';

const Content_02 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/about-image.png'
                alt='content-image-2'
                width={526}
                height={550}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2>True digital Agri-trading platform</h2>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
               Openmarket is built to solve one of agriculture’s biggest inefficiencies: the lack of transparency, traceability, and trust in farm-level trading. 
                </p>
                <p className='mb-7 last:mb-0'>
                Our journey began in 2021 with Cropwings, an Agriculture drone aggregator platform that mapped over 5 lakh acres and gathered 20 Lakhs data points. Leveraging this deep understanding of India’s Agriculture, 
                we evolved into Open Market, a seamless, transparent, and empowering platform that dematerializes farm produce, enabling farmers and buyers to trade instantly. 
                </p>
                <Link
                  to='/contact'
                  className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Get in touch
                </Link>
              </div>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_02;
