import { Col, Container, Row } from 'react-bootstrap';
import CardUnderHero from '../CardUnderHero/CardUnderHero';
import './Cards.css';

export default function Cards({ cards, direction }) {
    return (
        <Container className='py-5 my-4'>
            <Row className='justify-content-center'>
                {cards.map((card, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className='mb-4'>
                        <CardUnderHero
                            icon={card.icon}
                            imgCard={card.imgCard}
                            altCard={card.altCard}
                            title={card.title}
                            text={card.text}
                            number={card.number}
                            content={card.content}
                            direction={direction}
                            size='50'
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
