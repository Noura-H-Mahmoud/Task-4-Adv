import './PricingCards.css';
import Card from 'react-bootstrap/Card';
import Button from '../Button/Button';
import { Col, Row } from 'react-bootstrap';

export default function PricingCards({ cards, liGroups }) {
    return (
        <Row className='w-100 p-0 justify-content-center'>
            {cards.map((card, index) => {
                return (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className=' mt-4'>
                        <Card className='card-border border-0 text-color box-shadow'>
                            <Card.Body className='text-center p-0  rounded-4'>
                                <div className='advanced-after'>
                                    <Card.Title className='card-title-font-sm bg-title-card py-3 rounded-top title-card'>
                                        {card.title}
                                    </Card.Title>
                                    <div className='w-100 d-flex justify-content-center position-relative'>
                                        <h4 className='fs-1'>{card.price}</h4>
                                        <p className='pt-3 ps-2 opacity-50'>/ month</p>
                                        <span className='span-dollar-position position-absolute start-50'>$</span>
                                    </div>
                                </div>
                                <ul className='.card-li-font-sm list-unstyled ps-0 pb-4 d-flex flex-column align-items-center'>
                                    {liGroups.map((li, liIndex) => (
                                        <li key={liIndex} className='pt-2 max-content position-relative'>{li.text}</li>
                                    ))}
                                </ul>
                                <div className='bg-title-card py-3 rounded-bottom'>
                                    <Button buttonContainer='Buy Now' border='border-0' px='px-2' pxa='px-4' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
}

