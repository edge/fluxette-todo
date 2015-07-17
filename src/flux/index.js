import Flux from 'fluxette';
import stores from './stores';

const flux = new Flux(stores);

export default flux;
export const state = ::flux.state;
export const dispatch = ::flux.dispatch;
export const connect = ::flux.connect;
