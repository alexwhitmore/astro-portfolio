import { Scrollchor, linear } from 'react-scrollchor';
import react from 'react';
import '../../styles/test.css';

const HeaderScrollLink = ({ text, location, headerClass, offset }) => {
  return (
    <Scrollchor
      to={location}
      animate={{ offset: offset, duration: 0, easing: linear }}
      className={headerClass}>
      {text}
    </Scrollchor>
  );
};

export default HeaderScrollLink;
