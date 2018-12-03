import { CounterState, CounterActions } from '../Types';

export const counterReducer = (
    state: CounterState = { counter: 0 },
    action: CounterActions
) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + action.payload.value,
            };
        case 'DECREMENT':
            return {
                counter: state.counter - action.payload.value,
            };
        default:
            return state;
    }
};
