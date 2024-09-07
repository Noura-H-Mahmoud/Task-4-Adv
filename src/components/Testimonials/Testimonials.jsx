import { Container } from 'react-bootstrap';
import './Testimonials.css';
import Title from '../Title/Title';
import SharedText from '../SharedText/SharedText';
import MainSlider from '../MainSlider/MainSlider';
import doctor1 from '../../assets/images/testimonials-3.jpg';
import doctor2 from '../../assets/images/testimonials-4.jpg';
import doctor3 from '../../assets/images/testimonials-5.jpg';
import doctor4 from '../../assets/images/testimonials-2.jpg';
import doctor5 from '../../assets/images/testimonials-1.jpg';

export default function Testimonials() {

    const slides = [
        {
            text: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster noster aute amet eram fore quis sint minim. ',
            img: doctor1,
            title: 'Jena Karlis',
            title2: 'Store Owner'
        },
        {
            text: ' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ',
            img: doctor2,
            title: 'Matt Brandon',
            title2: 'Freelancer'
        },
        {
            text: ' Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum  cillum fugiat legam esse veniam culpa fore nisi cillum quid. ',
            img: doctor3,
            title: 'John Larson',
            title2: 'Entrepreneur'
        },
        {
            text: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster  noster aute amet eram fore quis sint minim. ',
            img: doctor4,
            title: 'Sarah Wilson',
            title2: 'Consultant'
        },
        {
            text: ' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ',
            img: doctor5,
            title: 'Michael Smith',
            title2: 'Project Manager'
        }
    ];

    return (
        <section id='testimonials' className='text-color py-5'>
            <Container className='d-flex flex-column align-items-center gap-4'>
                <Title title='Testimonials' withAfter={true} />
                <SharedText />
                <MainSlider slides={slides}/>
            </Container>
        </section>
    );
}
