import './SliderCards.css'
import Card from 'react-bootstrap/Card';
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

export default function SliderCards({ cards }) {
    return (
        <Card className='border-0'>
            {cards.map((card, index) => {
                return (
                    <Card.Body key={index} className='text-color p-3  position-relative'>
                        <Card.Text className='fst-italic bg-color-card p-4 pb-5 rounded-1 mb-5'>
                            <RiDoubleQuotesL size={40} className='color-main' />
                            {card.text}
                            <RiDoubleQuotesR size={40} className='color-main' />
                        </Card.Text>
                        <div className='size-img-doctor p-2 rounded-circle position-absolute mt-4'>
                            <Card.Img variant="top" src={card.img} className='rounded-circle' />
                        </div>
                        <Card.Title className='pt-5 p-xs-3 fw-bold ps-4'>{card.title}</Card.Title>
                        <Card.Text className='ps-4'>{card.title2}</Card.Text>
                    </Card.Body>
                )
            })}
        </Card>
    )
}

