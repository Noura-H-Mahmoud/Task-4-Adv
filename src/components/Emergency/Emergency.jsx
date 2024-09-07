import './Emergency.css'
import Button from '../Button/Button'
import { Container } from 'react-bootstrap'

export default function Emergency({ h1, text }) {
  return (
    <section className='bg-color-main text-light py-5'>
      <Container className='d-flex align-items-center flex-column gap-3 text-center py-4 w-75'>
        <h1>{h1}</h1>
        <p>{text}</p>
        <Button buttonContainer='Make an Appointment' px='px-3' pxa='px-4' border='btn btn-outline-light' />
      </Container>
    </section>
  )
}
