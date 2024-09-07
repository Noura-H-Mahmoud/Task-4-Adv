import './Tabs.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function Tabs({ tabs }) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={tabs[4].eventKey}>
            <Row>
                <Col sm={12} md={3}>
                    <Nav variant="pills" className="flex-column pb-3">
                        {tabs.map((tab, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link eventKey={tab.eventKey} className='text-color rounded-0 fw-bold'>{tab.link}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={12} md={9}>
                    <Tab.Content>
                        {tabs.map((tab, index) => (
                            <Tab.Pane key={index} eventKey={tab.eventKey}>
                                <div className='d-flex flex-column flex-lg-row gap-5 ms-3  flex-lg-row-reverse'>
                                    <img src={tab.imgTab} alt={tab.alt} className='size' />
                                    <div >
                                        <h4 className='mb-4 fs-3'>{tab.title}</h4>
                                        <p className='fst-italic'>{tab.text1}</p>
                                        <p>{tab.text}</p>
                                    </div>
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}


