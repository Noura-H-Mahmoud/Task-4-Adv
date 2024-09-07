import Li from '../Li/Li'
import './AboutContainer.css'
import { IoMdPlay } from "react-icons/io";

export default function AboutContainer({ img, alt, head, text, text2 }) {
    const items = [
        { para: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { para: ' Duis aute irure dolor in reprehenderit in voluptate velit.' },
        { para: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.' }
    ]
    return (
        <div className='d-flex flex-column flex-lg-row gap-4 '>
            <div className='position-relative'>
                <img src={img} alt={alt} className='w-100' />
                <div className='play position-absolute top-50 start-50 translate-middle z-3 style-icon d-flex align-items-center justify-content-center rounded-circle'>
                    <IoMdPlay className='fs-4' />
                </div>
            </div>
            <div>
                <h2 className='fw-bold'>{head}</h2>
                <p className='fst-italic'>{text}</p>
                <Li items={items} />
                <p>{text2}</p>
            </div>
        </div>
    )
}
