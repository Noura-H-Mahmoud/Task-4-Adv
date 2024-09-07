import { Container } from 'react-bootstrap'
import './About.css'
import Title from '../Title/Title'
import SharedText from '../SharedText/SharedText'
import AboutContainer from '../AboutContainer/AboutContainer'
import img from '../../assets/images/about.jpg'
import Cards from '../Cards/Cards'
import { FaFlask, FaAward } from "react-icons/fa";
import { FaUserDoctor, FaRegHospital } from "react-icons/fa6";
import Test from '../Test/Test'
import image from '../../assets/images/features.jpg'

export default function About() {
    const head = 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.'
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    const text2 = 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
    const cardData = [
        {
            icon: FaUserDoctor,
            number: '25',
            content: 'Doctors'
        },
        {
            icon: FaRegHospital,
            number: '15',
            content: 'Departments'
        },
        {
            icon: FaFlask,
            number: '8',
            content: 'Research Labs'
        },
        {
            icon: FaAward,
            number: '150',
            content: 'Awards'
        },
    ];
    const textTest = 'Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi';
    return (
        <section id='about' className='py-5 text-color mb-5'>
            <Container className='d-flex flex-column align-items-center gap-4'>
                <Title title='About Us' withAfter={true} />
                <div className='mb-5'>
                    <SharedText />
                </div>
                <AboutContainer head={head} text={text} text2={text2} img={img} alt='the center' />
                <Cards cards={cardData} direction='align-items-center gap-1  px-4 py-4' />
                <Test image={image} altImage='laboratory' textTest={textTest} />
            </Container >
        </section>
    )
}
