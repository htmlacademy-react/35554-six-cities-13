import spinner from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={spinner.spinner}>
      <span className={spinner.text}>Loading</span>
    </div>
  );
}

export default Spinner;
