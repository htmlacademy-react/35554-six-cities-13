import {useAppDispatch} from '../../hooks';
import {fetchOffersAction} from '../../store/api-actions';
import styles from './error-screen.module.css';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <section className={styles.container}>
        <h1 className={styles.title}>Ошибка</h1>
        <p className={styles.text}>Не удалось загрузить предложения об аренде</p>
        <button
          className={styles.button}
          type='button'
          onClick={() => {
            dispatch(fetchOffersAction());
          }}
        >
          Попробовать ещё раз
        </button>
      </section>
    </div>
  );
}

export default ErrorScreen;
