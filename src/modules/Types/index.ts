import { CounterState, CounterActions } from './Counter';
import { ControllerState, ControllerActions } from './Controller';
import { ApiState, ApiActions } from './Api';

export {
    FailureFetchPayload,
    RecieveFetchPayload,
    ApiActions,
    ApiState,
} from './Api';

export {
    SetEnablePayload,
    ControllerActions,
    ControllerState,
} from './Controller';

export {
    IncrementPayload,
    DecrementPayload,
    CounterState,
    CounterActions,
} from './Counter';

export type RootState = {
    counter: CounterState;
    controller: ControllerState;
    api: ApiState;
};

export type RootActions = CounterActions & ControllerActions & ApiActions;
