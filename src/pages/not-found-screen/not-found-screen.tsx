import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <section className="page__main container" style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '3em'}}>Ошибка</h1>
        <img src="img/404-error.svg" alt="404 error" width="250" height="250"/>
        <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link className="button" to={'/'}
          style={{
            marginTop: '20px',
            padding: '10px 25px',
            backgroundColor: '#4481c3',
            color: '#ffffff'
          }}
        >Back Home
        </Link>
      </section>
    </div>
  );
}

export default NotFoundScreen;
