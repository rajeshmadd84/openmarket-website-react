const Timeline = () => {
  const timelineData = [
    {
      year: "2020",
      title: "Foundation",
      description: "Openmarket was founded with a vision to revolutionize agricultural trading in India through digital innovation.",
      icon: "🚀"
    },
    {
      year: "2021",
      title: "Platform Development",
      description: "Built the core trading platform with advanced features for farmers and buyers to connect seamlessly.",
      icon: "💻"
    },
    {
      year: "2022",
      title: "First 1000 Users",
      description: "Reached our first milestone of 1000 registered farmers and buyers using our platform for trading.",
      icon: "👥"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated AI-powered pricing algorithms and quality assessment tools for better trading decisions.",
      icon: "🤖"
    },
    {
      year: "2024",
      title: "National Expansion",
      description: "Expanded operations across 15 states in India, serving over 50,000 farmers and 10,000 buyers.",
      icon: "🌾"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Planning to launch mobile app and introduce blockchain technology for enhanced transparency.",
      icon: "🔮"
    }
  ];

  return (
    <section id='timeline-section' className='py-20 lg:py-24'>
      {/* Section Container */}
      <div className='global-container'>
        {/* Section Header */}
        <div className='jos mb-16 text-center lg:mb-20'>
          <div className='mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]'>
            <h2 className='text-colorOMBlue mb-4'>Our Journey</h2>
            <h4 className='text-lg leading-[1.4] lg:text-xl'>
              From a small startup to India's leading agricultural trading platform
            </h4>
          </div>
        </div>
        {/* Section Header */}

        {/* Timeline */}
        <div className='relative'>
          {/* Timeline Line */}
          <div className='absolute top-8 left-0 h-0.5 w-full bg-colorOMBlue'></div>
          
          {/* Timeline Items */}
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
            {timelineData.map((item, index) => (
              <div
                key={index}
                className='jos relative flex flex-col items-center'
                data-jos_animation='fade-up'
              >
                {/* Timeline Dot */}
                <div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-colorOMBlue text-2xl text-white shadow-lg mb-6'>
                  {item.icon}
                </div>

                {/* Timeline Content */}
                <div className='w-full text-center'>
                  <div className='mb-3 text-sm font-semibold text-colorOMBlue'>
                    {item.year}
                  </div>
                  <h3 className='mb-3 text-lg font-bold text-black'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline Items */}
        </div>
        {/* Timeline */}
      </div>
      {/* Section Container */}
    </section>
  );
};

export default Timeline;
