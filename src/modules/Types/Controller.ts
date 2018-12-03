import { Action } from 'redux';

export type SetEnablePayload = {
    enable: boolean;
};

export interface SetEnableAction extends Action {
    type: 'SET_ENABLE';
    payload: SetEnablePayload;
}

export type ControllerActions = SetEnableAction;

export type ControllerState = {
    enable: boolean;
};
