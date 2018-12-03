import { ControllerState, ControllerActions } from '../Types';

export const controllerReducer = (
    state: ControllerState = { enable: true },
    action: ControllerActions
) => {
    switch (action.type) {
        case 'SET_ENABLE':
            return {
                enable: action.payload.enable,
            };
        default:
            return state;
    }
};
