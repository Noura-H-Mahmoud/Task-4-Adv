import { Container } from 'react-bootstrap';
import './Gallery.css';
import Title from '../Title/Title';
import SharedText from '../SharedText/SharedText';
import MainSlider from '../MainSlider/MainSlider';
import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';;
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
import gallery6 from '../../assets/images/gallery-6.jpg';
import gallery7 from '../../assets/images/gallery-7.jpg';
import gallery8 from '../../assets/images/gallery-8.jpg';

export default function Gallery() {
    const slides = [
        { image: gallery1 }, { image: gallery2 }, { image: gallery3 }, { image: gallery4 }, { image: gallery5 },
        { image: gallery6 }, { image: gallery7 }, { image: gallery8 },
    ]
    return (
        <section id='gallery' className='text-color py-5' >
            <Container className='d-flex flex-column align-items-center gap-4'>
                <Title title='Gallery' withAfter={true} />
                <SharedText />
                <MainSlider gallery={true} slides={slides} />
            </Container>
        </section >
    )
}
