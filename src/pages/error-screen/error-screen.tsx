import {useAppDispatch} from '../../hooks';
import {fetchOffersAction} from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <p className="error__text">Не удалось загрузить предложения об аренде</p>
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        className="replay replay__error"
        type='button'
      >
        Попробовать ещё раз
      </button>
    </div>
  );
}

export default ErrorScreen;
