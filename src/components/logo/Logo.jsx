import { Link } from 'react-router-dom';
import logoDark from '../../assets/img/om1.svg';
import logoLight from '../../assets/img/om1.svg';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='AIMass'
        width='96'
        height='96'
      />
    </Link>
  );
};

export default LogoDark;
