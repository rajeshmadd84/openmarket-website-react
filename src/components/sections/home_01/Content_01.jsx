const Content_01 = () => {
  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id='for-traders' className='scroll-mt-24'>
        {/* Section Spacer */}
        <div className='pb-20 xl:pb-[150px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
              {/* Content Left Block */}
              <div
                className='jos order-2 mt-16 rounded-md md:order-1 md:mt-0'
                data-jos_animation='fade-up'
              >
                <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                  <img
                    src='assets/img/th-2/1.svg'
                    alt='th2-content-img-1.png'
                    width={320}
                    height={564}
                    className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                  />
                </div>
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                <div className='mb-6'>
                  <p className='mb-3 text-base font-semibold uppercase tracking-wider text-colorOMBlue'>For Buyers</p>
                  <h2>Do your next trade instantly</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    Openmarket's buyer-first features empower buyers to access quality produce, competitive pricing, and seamless transactions all in one platform.
                  </p>
                  <ul className='flex flex-col gap-y-3 font-dmSans text-lg leading-tight tracking-tighter text-black lg:mt-12 lg:text-xl'>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Consistent quality at scale.
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Shortlist by grade, spec, location, and delivery window.
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Minimal Platform fee (simple & transparent).
                    </li>
                    <li className='flex items-start gap-x-3'>
                      <div className='mt-[2.5px] h-[30px] w-[30px]'>
                        <img
                          src='assets/img/th-1/check-circle.svg'
                          alt='check-circle'
                          width='30'
                          height='30'
                          className='h-full w-full'
                        />
                      </div>
                      Verified Sellers and assured quality.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
