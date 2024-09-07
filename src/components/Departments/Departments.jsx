import { Container } from 'react-bootstrap'
import './Departments.css';
import Title from '../Title/Title'
import SharedText from '../SharedText/SharedText'
import Tabs from '../Tabs/Tabs';
import imgTab1 from '../../assets/images/departments-1.jpg';
import imgTab2 from '../../assets/images/departments-2.jpg';
import imgTab3 from '../../assets/images/departments-3.jpg';
import imgTab4 from '../../assets/images/departments-4.jpg'; 
import imgTab5 from '../../assets/images/departments-5.jpg';

export default function Departments() {
    const tabsData = [
        {
            eventKey: 'Cardiology',
            link: 'Cardiology',
            title: 'Cardiology',
            text: "It encompasses a wide range of disorders, including heart failure, arrhythmias, and coronary artery disease. Cardiologists use specialized testing and medical procedures to help prevent, manage, and treat cardiovascular diseases, improving patients' quality of life.",
            text1: "The field of cardiology focuses on the diagnosis and treatment of heart conditions.",
            imgTab: imgTab1,
            alt: 'doctors'
        },
        {
            eventKey: 'Neurology',
            link: 'Neurology',
            title: 'Neurology',
            text: "Neurologists treat conditions like epilepsy, strokes, and multiple sclerosis, aiming to improve patients' neurological health.",
            text1: "Neurology deals with disorders of the nervous system, including the brain and spinal cord.",
            imgTab: imgTab2,
            alt: 'doctors'
        },
        {
            eventKey: 'Hepatology',
            link: 'Hepatology',
            title: 'Hepatology',
            text: "Hepatology studies the liver and related organs, managing diseases like hepatitis and liver cirrhosis.",
            text1: "Early diagnosis is key to preventing complications.",
            imgTab: imgTab3,
            alt: 'doctors'
        },
        {
            eventKey: 'Pediatrics',
            link: 'Pediatrics',
            title: 'Pediatrics',
            text: "Pediatricians manage childhood illnesses, promoting healthy growth through preventive care and treatment of various conditions.",
            text1: "Pediatrics focuses on children's health, from infancy to adolescence.",
            imgTab: imgTab4,
            alt: 'doctors'
        },
        {
            eventKey: 'Ophthalmologists',
            link: 'Ophthalmologists',
            title: 'Ophthalmologists',
            text: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
            text1: 'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.',
            imgTab: imgTab5,
            alt: 'doctors'
        }
    ];


    return (
        <section id='departments' className='py-5 text-color'>
            <Container className='d-flex flex-column align-items-center gap-4'>
                <Title title='Departments' withAfter={true} />
                <SharedText />
                <Tabs tabs={tabsData} />
            </Container>
        </section>
    )
}
