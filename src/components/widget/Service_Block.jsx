import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Service_Block = ({ icon_black, icon_orange, title, text, number }) => {
  return (
    <li className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-colorOMBlue'>
      <div className='relative mb-9 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-colorOMBlue text-4xl font-bold text-white transition-all duration-300 group-hover:bg-white group-hover:text-colorOMBlue'>
        {number}
      </div>
      <h3 className='mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]'>
        <Link to='/service-details' className='hover:text-colorOrangyRed'>
          {title}
        </Link>
      </h3>
      <p className='duration-300 group-hover:text-white'>{text}</p>
    </li>
  );
};

export default Service_Block;
