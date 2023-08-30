import {Link} from 'react-router-dom';
import styles from './not-found-screen.module.css';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main container">
      <section className={styles.container}>
        <h1 className={styles.title}>Error</h1>
        <img src="img/404-error.svg" alt="404 error" width={250} height={250}/>
        <p className={styles.text}>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link className={styles.button} to={AppRoute.Root}>Back Home</Link>
      </section>
    </div>
  );
}

export default NotFoundScreen;
