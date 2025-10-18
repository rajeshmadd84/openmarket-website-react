const Promo = () => {
  return (
    <section id='promo-section'>
      {/* Section Spacer */}
      <div className='pb-20 pt-20 xl:pb-[130px] xl:pt-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[1000px]'>
            <h2 className='font-raleway text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[80px]'>
              Start trading in 10 minutes.
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Promo List */}
          <ul className='grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
            {/* Promo Item */}
             <li className='jos text-center md:text-left' data-jos_delay='0.1'>
               <div className='mx-auto mb-[30px] inline-flex h-12 w-auto justify-center md:justify-normal xxl:h-[72px]'>
                 <img
                   src='assets/img/th-1/signup.png'
                   alt='icon-black-promo-1'
                   width={108}
                   height={108}
                   className='h-full w-auto'
                 />
               </div>
              <div className='mb-5 font-raleway text-2xl font-bold leading-[1.33] text-black xl:text-3xl'>
                Signup in 1 minute.
              </div>
              <p className='text-lg leading-[1.42] xl:text-[21px]'>
                Download Openmarket app and signup with mobile number and email.
              </p>
            </li>
            {/* Promo Item */}
            {/* Promo Item */}
             <li className='jos text-center md:text-left' data-jos_delay='0.2'>
               <div className='mx-auto mb-[30px] inline-flex h-12 w-auto justify-center md:justify-normal xxl:h-[72px]'>
                 <img
                   src='assets/img/th-1/customer.png'
                   alt='icon-black-promo-1'
                   width={108}
                   height={108}
                 
                   className='h-full w-auto'
                 />
               </div>
              <div className='mb-5 font-raleway text-2xl font-bold leading-[1.33] text-black xl:text-3xl'>
                Complete KYC in 5 minutes.
              </div>
              <p className='text-lg leading-[1.42] xl:text-[21px]'>
               Complete KYC with Aadhar card, company PAN card, and bank account.
              </p>
            </li>
            {/* Promo Item */}
            {/* Promo Item */}
             <li className='jos text-center md:text-left' data-jos_delay='0.3'>
               <div className='mx-auto mb-[30px] inline-flex h-12 w-auto justify-center md:justify-normal xxl:h-[72px]'>
                 <img
                   src='assets/img/th-1/trading.png'
                   alt='icon-black-promo-1'
                   width={108}
                   height={108}
                   className='h-full w-auto'
                 />
               </div>
              <div className='mb-5 font-raleway text-2xl font-bold leading-[1.33] text-black xl:text-3xl'>
                Customer Experiences
              </div>
              <p className='text-lg leading-[1.42] xl:text-[21px]'>
                It enables businesses to provide highly personalized and
                responsive innovative best customer experiences.
              </p>
            </li>
            {/* Promo Item */}
          </ul>
          {/* Promo List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Promo;

