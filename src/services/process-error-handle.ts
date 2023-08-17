import {store} from '../store';
import {clearError, setError} from '../store/app-process/app-process';
import {TIMEOUT_SHOW_ERROR} from '../const';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError({message: null, delay: TIMEOUT_SHOW_ERROR}));
};
