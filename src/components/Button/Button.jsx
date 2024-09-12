import './Button.css';

export default function Button({ buttonContainer, px, pxa, border, pop, onClick, link }) {
  return pop ? (
    <button
      className={`button-hover max-content py-2 bg-color-main rounded-1 ${px} ${border}`}
      onClick={onClick}
    >
      <span className={`text-light text-decoration-none py-2 ${pxa}`}>
        {buttonContainer}
      </span>
    </button>
  ) : (
    <a
      href={link}
      className={`button-hover max-content py-2 bg-color-main rounded-1 text-light text-decoration-none ${px} ${border} ${pxa}`}
    >
      {buttonContainer}
    </a>
  );
}
