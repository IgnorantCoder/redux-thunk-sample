import * as React from 'react';
import { connect } from 'react-redux';
import { RootState, actionCreator, RootActions } from '../modules';
import { ThunkDispatch } from 'redux-thunk';

type OutterProps = {
    label: {
        inc: string;
        dec: string;
    };
};

type StateProps = {
    disabled: boolean;
};

type DispatchProps = {
    increment: () => void;
    decrement: () => void;
};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            <button
                onClick={_ => {
                    props.increment();
                }}
                disabled={props.disabled}
            >
                {props.label.inc}
            </button>
            <button
                onClick={_ => {
                    props.decrement();
                }}
                disabled={props.disabled}
            >
                {props.label.dec}
            </button>
        </div>
    );
};

const mapStateToProps = (
    state: RootState,
    _ownProps: OutterProps
): StateProps => ({
    disabled: !state.controller.enable,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, RootActions>,
    _ownProps: OutterProps
): DispatchProps => ({
    increment: () => {
        dispatch(actionCreator.counter.asyncIncrement({ value: 10 }));
    },
    decrement: () => {
        dispatch(actionCreator.counter.asyncDecrement({ value: 10 }));
    },
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(component);
