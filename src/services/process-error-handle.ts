import {store} from '../store';
import {clearError, setError} from '../store/app-process/app-process';
import {TIMEOUT_SHOW_ERROR} from '../const';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(() => {
    store.dispatch(clearError({message: null}));
  }, TIMEOUT_SHOW_ERROR);
};
