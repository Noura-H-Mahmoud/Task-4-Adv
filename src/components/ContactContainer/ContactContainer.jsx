import { Col, Container, Row } from 'react-bootstrap';
import './ContactContainer.css';
import CardUnderHero from '../CardUnderHero/CardUnderHero';
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function ContactContainer() {
    return (
        <Container>
            <Row className='my-5'>
                <Col xs={12} lg={6}>
                    <Col xs={12} className='mb-4'>
                        <CardUnderHero
                            title='Address'
                            text='A108 Adam Street, New York, NY 535022'
                            direction='flex-column align-items-center py-4'
                            icon={GrLocation}
                            border='true'
                            size='30'
                        />
                    </Col>
                    <div className='d-flex flex-column flex-md-row gap-4 mb-4 mb-lg-0'>
                        <CardUnderHero
                            title='Call Us'
                            text='+1 5589 55488 55'
                            direction='flex-column align-items-center py-4'
                            icon={BsTelephone}
                            border='true'
                            size='30'
                        />
                        <CardUnderHero
                            title='Email Us'
                            text='info@example.com'
                            direction='flex-column align-items-center py-4'
                            icon={TfiEmail}
                            border='true'
                            size='30'
                        />
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className='h-100 p-4 d-flex flex-column align-items-center gap-4 box-shadow mt-4 mt-md-0'>
                        <div className='w-100 d-flex flex-column flex-md-row gap-4 opacity-50'>
                            <Input type='text' placeholder='Your Name' name='name' />
                            <Input type='email' placeholder='Your Email' name='email' />
                        </div>
                        <div className='opacity-50 w-100'>
                            <Input type='text' placeholder='Subject' name='subject' />
                        </div>
                        <div className='opacity-50 w-100'>
                            <Input as='textarea' rows='4' placeholder='Message' nameInput='message' />
                        </div>
                        <div className='text-center mt-4'>
                            <Button buttonContainer='Send Message' border='border-0' px='px-1' pxa='px-3' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
