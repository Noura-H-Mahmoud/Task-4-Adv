import './Button.css'

export default function Button({ buttonContainer, px, pxa, border, pop, onClick }) {
  return (
    <button className={`button-hover max-content py-2 bg-color-main rounded-1 ${px} ${border}`}
      onClick={pop ? onClick : undefined} >
      <a href="#" className={`text-light text-decoration-none py-2 ${pxa}`}>{buttonContainer}</a>
    </button>
  )
}
