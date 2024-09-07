import { Container } from 'react-bootstrap'
import './Appointment.css'
import Title from '../Title/Title'
import FormAppointment from '../FormAppointment/FormAppointment'
import SharedText from '../SharedText/SharedText'

export default function Appointment() {
    return (
        <section id='appointment' className='bg-color-second py-5 text-color'>
            <Container className='d-flex flex-column align-items-center text-center gap-4 py-5'>
                <Title title='MAKE AN APPOINTMENT' withAfter={true} />
                <div className='mb-4'>
                    <SharedText />
                </div>
                <FormAppointment />
            </Container>
        </section>
    )
}
