import './FooterBottom.css'

export default function FooterBottom({ beforBold, textbold, afetrbold, text, text2 }) {
    return (
        <div className='m-auto text-center'>
            <p>{beforBold} <b>{textbold}</b>{afetrbold}</p>
            <p className='d-flex gap-1 justify-content-center'>{text}
                <p className='color-main'>{text2}</p>
            </p>
        </div>
    )
}
