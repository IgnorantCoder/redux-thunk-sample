import * as React from 'react';
import { connect } from 'react-redux';
import { RootState, actionCreator, RootActions } from '../modules';
import { ThunkDispatch } from 'redux-thunk';

type OutterProps = {
    label: string;
};

type StateProps = {
    disabled: boolean;
};

type DispatchProps = {
    onClick: () => void;
};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            <button
                onClick={_ => {
                    props.onClick();
                }}
                disabled={props.disabled}
            >
                {props.label}
            </button>
        </div>
    );
};

const mapStateToProps = (
    state: RootState,
    _ownProps: OutterProps
): StateProps => ({
    disabled: state.api.onFetch,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, undefined, RootActions>,
    _ownProps: OutterProps
): DispatchProps => ({
    onClick: () => {
        dispatch(actionCreator.api.getData());
    },
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(component);
