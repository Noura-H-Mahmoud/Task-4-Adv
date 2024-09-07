import './Li.css';
import { IoCheckmarkDone } from "react-icons/io5";
export default function Li({ items }) {
    return (
        <ul className='ps-0'>
            {items?.map((item, index) => (
                <li key={index} className='list-unstyled mb-2'>
                    <IoCheckmarkDone className='color-main fs-5' />
                    {item?.para}
                </li>
            ))}
        </ul>
    );
}
