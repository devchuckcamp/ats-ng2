import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const TOGGLE_DONE = 'TOGGLE_DONE';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface UserPayload {
  index?: number;
  done?: boolean;
  value?: string;
  newValue?: string;
}

export function todoReducer(state = [], action: ActionWithPayload<UserPayload>) {
  switch (action.type) {
    case ADD_USER:
      return [action.payload, ...state];
    case DELETE_USER:
      return state.filter((item, index) => index !== action.payload.index);
    case UPDATE_USER:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { value: action.payload.newValue })
          : item;
      });
    case TOGGLE_DONE:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { done: !action.payload.done })
          : item;
      });
    default:
      return state;
  }
}