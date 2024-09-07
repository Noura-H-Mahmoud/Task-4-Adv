import './Doctors.css';
import Title from '../Title/Title';
import SharedText from '../SharedText/SharedText';
import { Container } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Dr1 from '../../assets/images/doctors-1.jpg';
import Dr2 from '../../assets/images/doctors-2.jpg';
import Dr3 from '../../assets/images/doctors-3.jpg';
import Dr4 from '../../assets/images/doctors-4.jpg';

export default function Doctors() {
    const cardData = [
        {
            imgCard: Dr1,
            title: 'Walter White',
            text: 'Chief Medical Officer'
        },
        {
            imgCard: Dr2,
            title: 'Sarah Jhonson',
            text: 'Anesthesiologist'
        },
        {
            imgCard: Dr3,
            title: 'William Anderson',
            text: 'Cardiology'
        },
        {
            imgCard: Dr4,
            title: 'Amanda Jepson',
            text: 'Neurosurgeon'
        },
    ];
    return (
        <section id='doctors' className='text-color py-5 bg-color-second'>
            <Container className='d-flex flex-column align-items-center gap-4'>
                <Title title='Doctors' withAfter={true} />
                <SharedText />
                <Cards cards={cardData} direction='flex-column gap-3 p-0' />
            </Container>
        </section >
    )
}
