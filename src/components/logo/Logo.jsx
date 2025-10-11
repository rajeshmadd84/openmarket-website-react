import { Link } from 'react-router-dom';
import logoDark from '../../assets/img/om-logo.png';
import logoLight from '../../assets/img/om-logo.png';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='AIMass'
        width='192'
        height='48'
      />
    </Link>
  );
};

export default LogoDark;
