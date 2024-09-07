import { Container } from 'react-bootstrap'
import './Questions.css'
import Title from '../Title/Title'
import SharedText from '../SharedText/SharedText'
import AccordionQ from '../AccordionQ/AccordionQ'

export default function Questions() {
    const items = [
        {
            key: '1',
            header: 'Non consectetur a erat nam at lectus urna duis?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            key: '2',
            header: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
            body: 'Quisque vel ligula eu erat fermentum feugiat.'
        },
        {
            key: '3',
            header: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
            body: 'Etiam euismod turpis ut lectus placerat posuere.'
        },
        {
            key: '4',
            header: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
            body: 'Curabitur vel erat non erat aliquet blandit.'
        },
        {
            key: '5',
            header: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
            body: 'Maecenas fermentum orci sit amet metus ullamcorper.'
        },
        {
            key: '6',
            header: 'Perspiciatis quod quo quos nulla quo illum ullam?',
            body: 'Suspendisse eu nunc ut felis fringilla dapibus.'
        }
    ];

    return (
        <section id='questions' className='text-color py-5 bg-color-second' >
            <Container className='d-flex flex-column align-items-center gap-4 text-center'>
                <Title title='Frequently Asked Questions' withAfter={true} />
                <SharedText />
                <AccordionQ items={items} />
            </Container>
        </section >
    )
}
