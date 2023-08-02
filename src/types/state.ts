import {store} from '../store';

export type State = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
