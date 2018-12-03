import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { RootState, RootActions, rootReducer } from './modules';
import { Provider } from 'react-redux';
import Controller from './component/Controller';
import Counter from './component/Counter';
import AsyncController from './component/AsyncController';
import DataArea from './component/DataArea';
import FetchController from './component/FetchController';

const store = createStore<RootState, RootActions, {}, {}>(
    rootReducer,
    applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>)
);

const component: React.SFC = () => {
    return (
        <Provider store={store}>
            <div>
                <Counter label={'Count'} />
                <Controller
                    label={{
                        inc: '+',
                        dec: '-',
                    }}
                />
                <AsyncController
                    label={{
                        inc: '+',
                        dec: '-',
                    }}
                />
                <FetchController label={'Fetch!!!'} />
                <DataArea />
            </div>
        </Provider>
    );
};

export default component;
