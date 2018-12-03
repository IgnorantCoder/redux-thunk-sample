import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../modules';

type OutterProps = {
    label: string;
};

type StateProps = {
    value: number;
};

type DispatchProps = {};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            <span>{`${props.label}: ${props.value.toString()}`}</span>
        </div>
    );
};

const mapStateToProps = (
    state: RootState,
    _ownProps: OutterProps
): StateProps => ({
    value: state.counter.counter,
});

const mapDispatchToProps = (
    _dispatch: Dispatch<Action>,
    _ownProps: OutterProps
): DispatchProps => ({});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(component);
