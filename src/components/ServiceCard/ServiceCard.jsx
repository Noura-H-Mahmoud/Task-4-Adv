import { Card } from 'react-bootstrap'
import './ServiceCard.css'

export default function ServiceCard({ title, text, icon: Icon }) {
    return (
        <Card className='h-100 border-0 text-color'>
            <Card.Body className='d-flex flex-column align-items-center text-center gap-3'>
                <div className='color-main box-shdow max-content py-4 px-4 rounded-circle box-shadow'>
                    <Icon size={40} />
                </div>
                <Card.Title className='fs-4 after-title position-relative'>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}
