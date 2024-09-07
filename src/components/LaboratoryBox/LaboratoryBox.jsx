import './LaboratoryBox.css'

export default function LaboratoryBox({ items }) {
    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} className='d-flex gap-4'>
                            <div className='Icon fs-3 color-main d-flex align-items-center justify-content-center px-3 py-3 max-content-height box-shadow rounded-1'>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className='fs-4 fw-bold'>{item.h3}</h3>
                                <p>{item.boxText}</p>
                            </div>
                        </div>
                    )
                })}
        </>
    )
}
