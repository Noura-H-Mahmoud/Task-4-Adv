import './CardUnderHero.css';
import Card from 'react-bootstrap/Card';

export default function CardUnderHero({ title, text, icon: Icon, direction, number, content, imgCard, altCard, border, size }) {
    return (
        <Card className={`${Icon ? 'card-hover' : ''} w-100 h-100 box-shadow border-0 rounded-0`}>
            <Card.Body className={`${Icon ? 'body-hover' : ''} d-flex text-color ${direction}`}>
                {Icon ? (
                    <div className={`icon-hover color-main ${border ? 'borderIconCardContact p-3 rounded-circle mb-3' : ''}`}>
                        <Icon size={size} />
                    </div>
                ) : (
                    <Card.Img variant="top" src={imgCard} alt={altCard} />
                )}
                <Card.Title className={`fs-4 ${!Icon ? 'padding' : ''}`}>{title}</Card.Title>
                <Card.Text className={`${!Icon ? 'padding' : ''}`}>{text}</Card.Text>
                <div>
                    <span className='fs-1 second-font fw-bold'>{number}</span>
                    <Card.Text>{content}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}
