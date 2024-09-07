import './NavTop.css';
import { LuClock } from 'react-icons/lu';
import { BsPhone } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

export default function NavTop({ text, tell, number }) {
  return (
    <div className="nav-top text-light fs-6 py-2 bg-color-main">
      <Container className='w-100 d-flex justify-content-center  justify-content-sm-between align-items-center'>
        <p className="d-none d-sm-block d-flex align-items-center gap-1 my-0 second-font">
          <LuClock />
          {text}
        </p>
        <a href={`tel:+${number}`} className="d-flex align-items-center gap-1 text-decoration-none text-light second-font">
          <BsPhone />
          {tell}
        </a>
      </Container>
    </div>
  );
}

