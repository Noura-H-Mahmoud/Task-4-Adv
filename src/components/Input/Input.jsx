import { Form } from 'react-bootstrap'
import './Input.css'

export default function Input({ as, rows, placeholder, nameInput, type }) {
    return (
        <Form.Group className='w-100'>
            <Form.Control
                as={as}
                type={type}
                rows={rows}
                placeholder={placeholder}
                name={nameInput}
                className='rounded-0 py-3'
            />
        </Form.Group>
    )
}
