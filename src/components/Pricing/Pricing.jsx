import { Container } from 'react-bootstrap'
import './Pricing.css'
import Title from '../Title/Title'
import SharedText from '../SharedText/SharedText'
import PricingCards from '../PricingCards/PricingCards'

export default function Pricing() {
    const cards = [
        { title: 'Free', price: '0' }, { title: 'Business', price: '19' }, { title: 'Developer', price: '29' }, { title: 'Ultimate', price: '49' }
    ]
    const liGroups = [
        { text: 'Aida dere' }, { text: 'Nec feugiat nisl' }, { text: 'Nulla at volutpat dola' }, { text: 'Pharetra massa' }, { text: 'Massa ultricies mi' }
    ]
    return (
        <section id='pricing' className='text-color py-5' >
            <Container className='d-flex flex-column align-items-center gap-4'>
                <Title title='Pricing' withAfter={true} />
                <SharedText />
                <PricingCards cards={cards} liGroups={liGroups} />
            </Container>
        </section >
    )
}
