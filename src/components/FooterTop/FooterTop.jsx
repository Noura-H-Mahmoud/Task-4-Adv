import './FooterTop.css';
import LineLink from '../LineLink/LineLink';
import SocialIcon from '../SocialIcon/SocialIcon';
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterItems from '../FooterItems/FooterItems';

export default function FooterTop({ h2, address }) {
    const lines = [
        { title: 'Phone: ', link: 'tel:+1 5589 55488 55', linkContent: '+1 5589 55488 55' },
        { title: 'Email: ', link: 'mailto:info@example.com', linkContent: 'info@example.com' },
    ];

    const icons = [
        <RiTwitterXLine />,
        <FaFacebook />,
        <FaInstagram />,
        <FaLinkedin />
    ];
    const itemsCol = [
        {
            title: 'Useful Links',
            links: [
                { href: '#home', text: 'Home' },
                { href: '#about', text: 'About us' },
                { href: '#services', text: 'Services' },
                { href: '#', text: 'Terms of service' },
                { href: '#', text: 'Privacy policy' }
            ]
        },
        {
            title: 'Our Services',
            links: [
                { href: '#', text: 'Web Design' },
                { href: '#', text: 'Web Development' },
                { href: '#', text: 'Product Management' },
                { href: '#', text: 'Marketing' },
                { href: '#', text: 'Graphic Design' }
            ]
        },
        {
            title: 'Hic solutasetp',
            links: [
                { href: '#', text: 'Molestiae accusamus iure' },
                { href: '#', text: 'Excepturi dignissimos' },
                { href: '#', text: 'Suscipit distinctio' },
                { href: '#', text: 'Dilecta' },
                { href: '#', text: 'Sit quas consectetur' }
            ]
        },
        {
            title: 'Nobis illum',
            links: [
                { href: '#', text: 'Ipsam' },
                { href: '#', text: 'Laudantium dolorum' },
                { href: '#', text: 'Dinera' },
                { href: '#', text: 'Trodelas' },
                { href: '#', text: 'Flexo' }
            ]
        },
    ];
    return (
        <div className='w-100 d-flex flex-column flex-xl-row footer-top-gap pb-3 border-bottom'>
            <div>
                <h2>{h2}</h2>
                <p className='w-para'>{address}</p>
                <LineLink lines={lines} />
                <SocialIcon icons={icons} />
            </div>
            <div className='w-100 d-flex flex-column flex-md-row justify-content-between gap-4 flex-wrap'>
                <FooterItems items={itemsCol} />
            </div>
        </div>
    );
}
