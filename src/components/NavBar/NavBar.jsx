import './NavBar.css';
import NavTop from '../NavTop/NavTop';
import NavBottom from '../NavBottom/NavBottom';
import logo from '../../assets/images/logo.png'

export default function NavBar() {
  const items = [
    {
      link: 'home',
      linkContent: 'HOME'
    },
    {
      link: 'about',
      linkContent: 'ABOUT'
    },
    {
      link: 'services',
      linkContent: 'SERVICES'
    },
    {
      link: 'departments',
      linkContent: 'DEPARTMENTS'
    },
    {
      link: 'doctors',
      linkContent: 'DOCTORS'
    },
  ]
  const dropdownItems = [
    { link: "#appointment", content: "Appointment" },
    { link: "#testimonials", content: "Testimonials" },
    { link: "#gallery", content: "Gallery" },
    { link: "#pricing", content: "Pricing" },
    { link: "#questions", content: "Frequently Asked Questions" },
  ]
  return (
    <nav className='d-flex flex-column w-100 fixed-top box-shadow'>
      <NavTop
        text='Monday - Saturday, 8AM to 10PM'
        tell='Call us now +1 5589 55488 55'
        number='1 5589 55488 55'
      />
      <NavBottom img={logo} alt='logo' items={items} contactLink='contact' contactContent='CONTACT' dropdownItems={dropdownItems} />
    </nav>
  );
}



