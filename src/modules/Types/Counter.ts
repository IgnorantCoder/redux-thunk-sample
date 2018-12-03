import { Action } from 'redux';

export type IncrementPayload = {
    value: number;
};

export interface IncrementAction extends Action {
    type: 'INCREMENT';
    payload: IncrementPayload;
}

export type DecrementPayload = {
    value: number;
};

export interface DecrementAction extends Action {
    type: 'DECREMENT';
    payload: DecrementPayload;
}

export type CounterActions = IncrementAction & DecrementAction;

export type CounterState = {
    counter: number;
};
