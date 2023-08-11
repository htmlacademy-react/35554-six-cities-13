import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles.spinner}>
      <span className={styles.text}>Loading</span>
    </div>
  );
}

export default Spinner;
