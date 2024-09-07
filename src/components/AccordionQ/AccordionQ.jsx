import './AccordionQ.css'
import Accordion from 'react-bootstrap/Accordion';

export default function AccordionQ({ items }) {
    return (
        <Accordion className='w-75'>
            {items.map((item, index) => {
                return (
                    <Accordion.Item eventKey={item.key} className='mb-4 rounded-1' key={index}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}
