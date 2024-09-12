import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io';
import './NavBottom.css';
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBottom({ img, alt, items, contactLink, contactContent, dropdownItems }) {
    const location = useLocation();
    const [linkActive, setlinkActive] = useState('#home');
    useEffect(() => {
        const currentPath = location.pathname + location.hash;
        if (location.hash) {
            setlinkActive(currentPath)
        } else {
            setlinkActive('#home')
        }
    }, [location]);


    return (
        <Navbar collapseOnSelect expand="lg" className="w-100 bg-white py-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={img} alt={alt} className="width-img" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 p-0" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto pt-3 pt-lg-0">
                        {items?.map((item, index) => (
                            <Nav.Link
                                key={index}
                                href={`#${item.link}`}
                                className={`fs-6 ${linkActive.includes(item.link) ? 'active' : ''}`}
                            >
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
                                <NavDropdown.Item
                                    key={index}
                                    href={dropdownItem.link}
                                    className={`${linkActive.includes(dropdownItem.link) ? 'active' : ''}`}
                                >
                                    {dropdownItem.content}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link href={`#${contactLink}`} className="pb-5 pb-lg-0 pe-lg-1 pe-xl-3 pe-xxl-5">
                            {contactContent}
                        </Nav.Link>
                        <div className='d-none d-lg-block'>
                            <Button
                                buttonContainer='Make an appointment'
                                pxa='px-3'
                                border='border-0'
                                link='#appointment'
                            />
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-lg-none'>
                    <Button
                        buttonContainer='Make an appointment'
                        pxa='px-1 px-sm-3'
                        border='border-0'
                        link='#appointment'
                    />
                </div>
            </Container>
        </Navbar>
    );
}