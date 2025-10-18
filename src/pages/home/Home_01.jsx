import Hero from '../../components/sections/home_01/Hero';
import Service from '../../components/sections/home_01/service/Service';
import Content_01 from '../../components/sections/home_01/Content_01';
import Content_02 from '../../components/sections/home_01/Content_02';
import Working from '../../components/sections/home_01/Working';
import Promo from '../../components/sections/home_01/Promo';
import FunFact from '../../components/sections/home_01/FunFact';
import Pricing from '../../components/sections/home_01/Pricing';
import Testimonial_Section from '../../components/sections/home_01/Testimonial_Section';

const Home_01 = () => {
  return (
    <main className='main-wrapper relative overflow-hidden'>
      <Hero />
      <Service />
      <Content_01 />
      <Content_02 />
      <Working />
      <Promo />
      {/*<FunFact />
      <Pricing />
      <Testimonial_Section />*/}
    </main>
  );
};

export default Home_01;
