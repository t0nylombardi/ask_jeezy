import { FETCH_JEEZY } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_JEEZY:
      return action.payload.data;
  }
  return state; 
}