import { ApiState, ApiActions } from '../Types';

export const apiReducer = (
    state: ApiState = { onFetch: false, data: {}, error: 'Please fetch.' },
    action: ApiActions
) => {
    switch (action.type) {
        case 'START_FETCH':
            return Object.assign({}, state, { onFetch: true });
        case 'FAILURE_FETCH':
            return Object.assign({}, state, { error: action.payload.message });
        case 'RECIEVE_FETCH':
            return Object.assign({}, state, {
                onFetch: false,
                data: action.payload,
                error: null,
            });
        default:
            return state;
    }
};
