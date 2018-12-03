import { Action } from 'redux';

export interface StartFetchAction extends Action {
    type: 'START_FETCH';
}

export type FailureFetchPayload = {
    message: string;
};

export interface FailureFetchAction extends Action {
    type: 'FAILURE_FETCH';
    payload: FailureFetchPayload;
}

export type RecieveFetchPayload = {
    [key: string]: string;
};

export interface RecieveFetchAction extends Action {
    type: 'RECIEVE_FETCH';
    payload: RecieveFetchPayload;
}

export type ApiActions = StartFetchAction &
    FailureFetchAction &
    RecieveFetchAction;

export type ApiState = {
    onFetch: boolean;
    error?: string;
    data: {
        [key: string]: string;
    };
};
