import { Col, Form } from 'react-bootstrap'
import './Selects.css'

export default function Selects({ selects }) {
    return (
        <>
            {selects.map((select, index) => {
                return (
                    <Col lg={4} md={6} sm={12} className="mb-3" key={index}>
                        <Form.Group className='after-select position-relative'>
                            <Form.Control
                                as='select'
                                name={select.name}
                                className='rounded-0 py-3 '
                            >
                                <option value={select.option1}>{select.option1}</option>
                                <option value={select.option2}>{select.option2}</option>
                                <option value={select.option3}>{select.option3}</option>
                                <option value={select.option4}>{select.option4}</option>
                                <option value={select.option5}>{select.option5}</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                )
            })
            }
        </>
    )
}
