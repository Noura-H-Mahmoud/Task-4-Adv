import { Container } from 'react-bootstrap'
import FooterTop from '../FooterTop/FooterTop'
import './Footer.css'
import FooterBottom from '../FooterBottom/FooterBottom'
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer className='text-color pt-5 bg-color-second position-relative'>
            <Container className='d-flex flex-column gap-4'>
                <FooterTop h2='Medicio' address='A108 Adam Street New York, NY 535022' />
                <FooterBottom beforBold='© Copyright ' textbold=' Medicio ' afetrbold=' All Rights Reserved' text='Designed by' text2='Noura Mahmoud' />
                <a href="#home" className="position-absolute position-arrowUp px-3 py-2 bg-color-main rounded-1">
                    <FaArrowUp className='text-light' />
                </a>
            </Container>
        </footer>
    )
}
