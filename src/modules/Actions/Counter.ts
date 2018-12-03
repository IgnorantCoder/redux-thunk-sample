import { ActionCreator, Dispatch, Action } from 'redux';
import {
    IncrementPayload,
    RootActions,
    DecrementPayload,
    SetEnablePayload,
    RootState,
} from '../Types';
import { ThunkAction } from 'redux-thunk';

export const increment: ActionCreator<RootActions> = (
    payload: IncrementPayload
): RootActions =>
    ({
        payload,
        type: 'INCREMENT',
    } as RootActions);

export const decrement: ActionCreator<RootActions> = (
    payload: DecrementPayload
): RootActions =>
    ({
        payload,
        type: 'DECREMENT',
    } as RootActions);

export const setEnable: ActionCreator<RootActions> = (
    payload: SetEnablePayload
): RootActions =>
    ({
        payload,
        type: 'SET_ENABLE',
    } as RootActions);

export const asyncIncrement = (
    payload: IncrementPayload
): ThunkAction<void, RootState, undefined, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    dispatch(setEnable({ enable: false }));
    setTimeout(() => {
        dispatch(increment({ value: payload.value }));
        dispatch(setEnable({ enable: true }));
    }, 1000);
};

export const asyncDecrement = (
    payload: DecrementPayload
): ThunkAction<void, RootState, undefined, RootActions> => (
    dispatch: Dispatch<Action>
) => {
    dispatch(setEnable({ enable: false }));
    setTimeout(() => {
        dispatch(decrement({ value: payload.value }));
        dispatch(setEnable({ enable: true }));
    }, 1000);
};
