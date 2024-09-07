import './LineLink.css'

export default function LineLink({ lines }) {
    return (
        <>
            {lines.map((line, index) => {
                return (
                    <div key={index} className='d-flex gap-1 align-items-center'>
                        <span className='fw-bold'>{line.title}</span>
                        <a href={line.link} className='text-color text-decoration-none'>
                            {line.linkContent}
                        </a>
                    </div>
                )
            })}
        </>
    )
}
