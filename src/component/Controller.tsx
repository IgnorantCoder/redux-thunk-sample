import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState, actionCreator, RootActions } from '../modules';

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

const mapStateToProps = (state: RootState): StateProps => ({
    disabled: !state.controller.enable,
});

const mapDispatchToProps = (
    dispatch: Dispatch<RootActions>
): DispatchProps => ({
    increment: () => {
        dispatch(actionCreator.counter.increment({ value: 1 }));
    },
    decrement: () => {
        dispatch(actionCreator.counter.decrement({ value: 1 }));
    },
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(component);
