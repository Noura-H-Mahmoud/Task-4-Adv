import './SocialIcon.css';

export default function SocialIcon({ icons }) {
    return (
        <div className='d-flex gap-2'>
            {icons.map((icon, index) => {
                return (
                    <div key={index} className='socialIcon border border-secondary rounded-circle d-flex justify-content-center align-items-center mt-4'>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='text-color'>
                            {icon}
                        </a>
                    </div>
                )
            })}
        </div>
    );
}
