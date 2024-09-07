import { Container } from 'react-bootstrap'
import Title from '../Title/Title'
import './Services.css'
import ServiceCards from '../ServiceCards/ServiceCards'
import { FaHeartbeat, FaPills, FaDna } from "react-icons/fa";
import { BiSolidAddToQueue } from "react-icons/bi";
import { FaWheelchair, FaHospitalUser } from 'react-icons/fa6';
import SharedText from '../SharedText/SharedText';

export default function Services() {
    const cards =[
        {
            icon:FaHeartbeat,
            title:'Nesciunt Mete',
            text:'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.'
        },
        {
            icon:FaPills,
            title:'Eosle Commodi',
            text:'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.'
        },
        {
            icon:FaHospitalUser,
            title:'Ledo Markt',
            text:'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.'
        },
        {
            icon:FaDna,
            title:'Asperiores Commodit',
            text:'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.'
        },
        {
            icon:FaWheelchair,
            title:'Velit Doloremque',
            text:'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.'
        },
        {
            icon:BiSolidAddToQueue,
            title:'Dolori Architecto',
            text:'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.'
        }
    ]
    return (
        <section id='services'>
            <Container className='d-flex flex-column align-items-center gap-5 text-color'>
                <Title title='Services' withAfter={true} />
                <SharedText />
                <ServiceCards cards={cards} />
            </Container>
        </section>
    )
}
