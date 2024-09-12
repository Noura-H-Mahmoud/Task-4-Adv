import { useState } from 'react';
import BoxHero from '../BoxHero/BoxHero';
import './CarouselHero.css';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CarouselHero({ items }) {
    const boxes = [
        {
            head: 'Temporibus autem quibusdam',
            text: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.',
            moreText: 'Discover more about how we provide comprehensive solutions to meet your healthcare needs. We are committed to delivering our services with the highest standards of quality to ensure your comfort and complete satisfaction.'
        },
        {
            head: 'Expert Dental Care',
            text: 'Experience exceptional dental care with a team of specialized dentists. We offer comprehensive services including cleanings, whitening, and root canal treatments, with a focus on comfort and quality at every step.',
            moreText: 'Our team of specialized dentists provides the best treatments using the latest technologies to ensure effective results. Join us for outstanding dental care and a healthier, more beautiful smile.'
        },
        {
            head: 'Advanced Laboratory Services',
            text: 'Comprehensive laboratory services including medical tests and diagnostic imaging using the latest technology. We ensure accurate results and prompt service to help you receive the best possible healthcare.',
            moreText: 'We offer advanced laboratory services to ensure accurate results and timely service. With the latest equipment and technologies, we are here to support your health and provide reliable results for your treatment plan.'
        }
    ];

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ head: '', text: '' });

    const handleReadMore = (index) => {
        setModalContent(boxes[index]);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
            <Carousel interval={3300}>
                {items.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 vh-100 object-fit-cover"
                            src={item.src}
                            alt={item.alt}
                        />
                        <Carousel.Caption className='w-75 position-absolute start-50 translate-middle top-60'>
                            <BoxHero
                                box={boxes[index]}
                                onReadMore={() => handleReadMore(index)}
                            />
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {modalContent.head}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent.moreText}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}