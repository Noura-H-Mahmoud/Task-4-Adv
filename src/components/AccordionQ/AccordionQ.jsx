import './AccordionQ.css'
import Accordion from 'react-bootstrap/Accordion';

export default function AccordionQ({ items }) {
    return (
        <Accordion className='w-75 w-small'>
            {items.map((item, index) => {
                return (
                    <Accordion.Item eventKey={item.key} className='mb-4 rounded-1' key={index}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body className='text-start ps-4'>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}
