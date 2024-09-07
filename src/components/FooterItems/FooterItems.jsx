import './FooterItems.css'

export default function FooterItems({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div key={index}>
                    <h3 className='mb-4'>{item.title}</h3>
                    <ul className='d-flex flex-column gap-3 list-unstyled'>
                        {item.links.map((link, liIndex) => (
                            <a key={liIndex} href={link.href} className='text-color text-decoration-none cur'>
                                <li>{link.text}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

