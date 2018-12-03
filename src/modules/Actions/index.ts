import {
    increment,
    decrement,
    asyncIncrement,
    asyncDecrement,
} from './Counter';
import { getData } from './Api';

export const actionCreator = {
    counter: {
        increment,
        decrement,
        asyncIncrement,
        asyncDecrement,
    },
    api: {
        getData,
    },
};
