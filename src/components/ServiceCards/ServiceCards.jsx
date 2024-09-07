import { Col, Container, Row } from 'react-bootstrap'
import './ServiceCards.css'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function ServiceCards({ cards }) {
    return (
        <Container className='mb-5'>
            <Row>
                {cards.map((card, index) => {
                    return (
                        <Col xs={12} sm={6} md={4} key={index} >
                            <ServiceCard
                                title={card.title}
                                icon={card.icon}
                                text={card.text}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
