import { indexBy, prop } from 'ramda';

import { MyObjects } from './model';

const INITIAL_STATE: MyObjects = {
  country: null,
  state: null,
  town: null
};

export default (state: MyObjects|undefined, action: any): MyObjects => {
  if (state === undefined) {
    return INITIAL_STATE;
  }

  switch (action.type) {
    // ...
    default:
      return state;
  }
}