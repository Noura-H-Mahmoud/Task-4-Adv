import './FormAppointment.css';
import { Form, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import Inputs from '../Inputs/Inputs';
import Selects from '../Selects/Selects';
import Input from '../Input/Input';

export default function FormAppointment() {
    const inputs = [
        {
            type: 'text',
            placeholder: 'Your Name',
            name: 'name'
        },
        {
            type: 'email',
            placeholder: 'Your Email',
            name: 'email'
        },
        {
            type: 'tel',
            placeholder: 'Your Phone',
            name: 'phone'
        },
        {
            type: 'date',
            placeholder: 'Appointment Date',
            name: 'date'
        },
    ]
    const selects = [
        {
            name: 'department',
            option1: 'Select Department',
            option2: 'Cardiology',
            option3: 'Neurology',
            option4: 'Orthopedics',
            option5: 'Pediatrics'
        },
        {
            name: 'doctor',
            option1: 'Select Doctor',
            option2: 'Dr. Smith',
            option3: 'Dr. Jones',
            option4: 'Dr. Brown',
            option5: 'Dr. Johnson'
        }
    ]
    return (
        <>
            <Row className="w-100">
                <Col md={12}>
                    <Form >
                        <Row>
                            <Inputs inputs={inputs} />
                            <Selects selects={selects} />
                        </Row>
                       <Input  as='textarea' rows='5' placeholder='Message (Optional)' nameInput='message'/>
                        <div className='text-center mt-4'>
                            <Button buttonContainer='Make an Appointment' border='border-0' px='px-1' pxa='px-3' />
                        </div>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
