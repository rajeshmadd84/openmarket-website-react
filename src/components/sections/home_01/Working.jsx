import { Link } from 'react-router-dom';

const Working = () => {
  return (
    <section id='section-working-process'>
      <div className='px-5 sm:px-[50px]'>
        <div className='relative z-[1] mx-auto max-w-full bg-black'>
          {/* Section Spacer */}
          <div className='py-16 sm:px-10 md:px-20 lg:py-20 xl:px-[100px] xl:py-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[1000px]'>
                <h2 className='font-raleway text-4xl font-medium leading-[1.06] text-white sm:text-[44px] lg:text-[56px] xl:text-[80px]'>
                Why Openmarket?
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Work Process List */}
              <div className='grid grid-flow-dense gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                {/* Work Process Item */}
                <div className='order-1 col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-[#1B97FF]'>
                  <div className='h-10 w-auto xxl:h-[60px]'>
                    <img
                      src='assets/img/th-3/icon-black-work-process-1.svg'
                      alt='working-process-icon'
                      width={62}
                      height={60}
                      className='h-full'
                    />
                  </div>
                  <div className='font-raleway text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Zero Brokerage
                  </div>
                  <p className='text-xl leading-[1.33] lg:text-2xl'>
                  Just a transparent & straightforward platform fee. No hidden costs.
                  </p>
                  <Link
                    rel='noopener noreferrer'
                    to='/service-details'
                    className='h-[30px] w-[30px]'
                  >
                    <img
                      src='assets/img/th-3/icon-white-arrow-right.svg'
                      alt='icon-white-arrow-right'
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
                {/* Work Process Item */}
                {/* Work Process Item */}
                <div className='order-2 col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-[#1B97FF]'>
                  <div className='h-10 w-auto xxl:h-[60px]'>
                    <img
                      src='assets/img/th-3/icon-black-work-process-5.svg'
                      alt='working-process-icon'
                      width={60}
                      height={60}
                      className='h-full'
                    />
                  </div>
                  <div className='font-raleway text-2xl font-bold leading-[1.33] lg:text-3xl'>
                    Faster Trades
                  </div>
                  <p className='text-xl leading-[1.33] lg:text-2xl'>
                  Lightning-fast trades, real-time confirmations.
                  </p>
                  <Link
                    rel='noopener noreferrer'
                    to='/service-details'
                    className='h-[30px] w-[30px]'
                  >
                    <img
                      src='assets/img/th-3/icon-white-arrow-right.svg'
                      alt='icon-white-arrow-right'
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
                {/* Work Process Item */}
                {/* Work Process Item */}
                <div className='order-3 col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-[#1B97FF]'>
                  <div className='h-10 w-auto xxl:h-[60px]'>
                    <img
                      src='assets/img/th-3/icon-black-work-process-3.svg'
                      alt='working-process-icon'
                      width={60}
                      height={60}
                      className='h-full'
                    />
                  </div>
                  <div className='font-raleway text-2xl font-bold leading-[1.33] lg:text-3xl'>
                  True Price Discovery 
                  </div>
                  <p className='text-xl leading-[1.33] lg:text-2xl'>
                  Revealing the real market value of the produce.
                  </p>
                  <Link
                    rel='noopener noreferrer'
                    to='/service-details'
                    className='h-[30px] w-[30px]'
                  >
                    <img
                      src='assets/img/th-3/icon-white-arrow-right.svg'
                      alt='icon-white-arrow-right'
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
                {/* Work Process Item */}
                <div className='order-1 col-span-full grid gap-6 lg:grid-cols-2 xl:order-2 xl:grid-cols-2'>
                  {/* Work Process Item */}
                  <div className='col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-[#1B97FF]'>
                    <div className='h-10 w-auto xxl:h-[60px]'>
                      <img
                        src='assets/img/th-3/icon-black-work-process-4.svg'
                        alt='working-process-icon'
                        width={65}
                        height={60}
                        className='h-full'
                      />
                    </div>
                    <div className='font-raleway text-2xl font-bold leading-[1.33] lg:text-3xl'>
                      Global reach
                    </div>
                    <p className='text-xl leading-[1.33] lg:text-2xl'>
                    Expand your reach. Trade across the world.
                    </p>
                    <Link
                      rel='noopener noreferrer'
                      to='/service-details'
                      className='h-[30px] w-[30px]'
                    >
                      <img
                        src='assets/img/th-3/icon-white-arrow-right.svg'
                        alt='icon-white-arrow-right'
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  {/* Work Process Item */}
                  {/* Work Process Item */}
                  <div className='col-span-1 flex flex-col gap-y-8 rounded-[10px] bg-[#121212] p-[30px] text-white transition-all duration-300 hover:bg-[#1B97FF]'>
                    <div className='h-10 w-auto xxl:h-[60px]'>
                      <img
                        src='assets/img/th-3/icon-black-work-process-5.svg'
                        alt='working-process-icon'
                        width={40}
                        height={60}
                        className='h-full'
                      />
                    </div>
                    <div className='font-raleway text-2xl font-bold leading-[1.33] lg:text-3xl'>
                      Risk Mitigation
                    </div>
                    <p className='text-xl leading-[1.33] lg:text-2xl'>
                    Guard from volatility shocks through hedging.
                    </p>
                    <Link
                      rel='noopener noreferrer'
                      to='/service-details'
                      className='h-[30px] w-[30px]'
                    >
                      <img
                        src='assets/img/th-3/icon-white-arrow-right.svg'
                        alt='icon-white-arrow-right'
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  {/* Work Process Item */}
                </div>
              </div>
              {/* Work Process List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
          {/* Vertical Line */}
          <div className='absolute left-0 top-0 -z-[1] flex h-full w-full justify-evenly'>
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
            <div className='h-full w-[1px] bg-[#121212]' />
          </div>
          {/* Vertical Line */}
        </div>
      </div>
    </section>
  );
};

export default Working;

