import './Title.css';

export default function Title({ title, withAfter, withLineStart }) {
  return (
    <h1 className={`fs-large fw-semibold position-relative ${withAfter ? 'After' : ''} ${withLineStart ? 'Line' : ''}`}>
      {title}
    </h1>
  );
}

