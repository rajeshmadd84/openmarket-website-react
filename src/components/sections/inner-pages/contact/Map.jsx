const Map = () => {
  return (
    <section className='map-section'>
      {/* Section Spacer */}
      <div className='pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]'>
              <h2 className='text-black'>
                We always welcome our clients to our office
              </h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Map Block */}
          <div className='relative overflow-hidden rounded-lg'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.391!3d17.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158da00645d%3A0x200a98a7d70790d8!2sCropWings%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1729267890123!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CropWings Technologies Pvt Ltd - Hyderabad Office"
            />
          </div>
          {/* Map Block */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Map;
