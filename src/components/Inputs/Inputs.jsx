import './Inputs.css'
import { Form, Col } from 'react-bootstrap';

export default function Inputs({inputs}) {
    return (
        <>
            {inputs.map((input, index) => {
                return (
                    <Col lg={4} md={6} sm={12} className="mb-3">
                        <Form.Group key={index}>
                            <Form.Control
                                type={input.type}
                                placeholder={input.placeholder}
                                name={input.name}
                                className='rounded-0 py-3'
                            />
                        </Form.Group>
                    </Col>
                )
            })}
        </>
    )
}
