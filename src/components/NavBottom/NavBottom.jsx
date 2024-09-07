// import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
// import { IoIosArrowDown } from 'react-icons/io';
// import './NavBottom.css';
// import Button from "../Button/Button";

// export default function NavBottom({ img, alt, items, contactLink, contactContent }) {
//     return (
//         <Navbar collapseOnSelect expand="lg" className=" w-100 bg-white py-3">
//             <Container>
//                 <Navbar.Brand href="#home">
//                     <img src={img} alt={alt} className="width-img" />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 p-0" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         {items?.map((item, index) => (
//                             <Nav.Link key={index} href={`#${item.link}`} className="fs-6">
//                                 {item.linkContent}
//                             </Nav.Link>
//                         ))}
//                         <NavDropdown
//                             title={
//                                 <>
//                                     <span>DROPDOWN </span>
//                                     <IoIosArrowDown />
//                                 </>
//                             }
//                             id="collapsible-nav-dropdown"
//                         >
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">
//                                 Separated link
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                         <Nav.Link href={`#${contactLink}`} className="pe-1 pe-xl-5">
//                             {contactContent}
//                         </Nav.Link>
//                         <div className='d-none d-lg-block'>
//                             <Button buttonContainer='Make an appointment' pxa='px-3' border='border-0' />
//                         </div>
//                     </Nav>
//                 </Navbar.Collapse>
//                 <div className='d-lg-none'>
//                     <Button buttonContainer='Make an appointment' pxa='px-1 px-sm-3' border='border-0' />
//                 </div>
//             </Container>
//         </Navbar>
//     );
// }
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io';
import './NavBottom.css';
import Button from "../Button/Button";

export default function NavBottom({ img, alt, items, contactLink, contactContent, dropdownItems }) {
    return (
        <Navbar collapseOnSelect expand="lg" className=" w-100 bg-white py-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={img} alt={alt} className="width-img" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 p-0" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {items?.map((item, index) => (
                            <Nav.Link key={index} href={`#${item.link}`} className="fs-6">
                                {item.linkContent}
                            </Nav.Link>
                        ))}
                        <NavDropdown
                            title={
                                <>
                                    <span>DROPDOWN </span>
                                    <IoIosArrowDown />
                                </>
                            }
                            id="collapsible-nav-dropdown"
                        >
                            {dropdownItems?.map((dropdownItem, index) => (
                                <NavDropdown.Item key={index} href={dropdownItem.link}>
                                    {dropdownItem.content}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link href={`#${contactLink}`} className="pe-1 pe-xl-5">
                            {contactContent}
                        </Nav.Link>
                        <div className='d-none d-lg-block'>
                            <Button buttonContainer='Make an appointment' pxa='px-3' border='border-0' />
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-lg-none'>
                    <Button buttonContainer='Make an appointment' pxa='px-1 px-sm-3' border='border-0' />
                </div>
            </Container>
        </Navbar>
    );
}
