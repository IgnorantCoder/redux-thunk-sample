import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../modules';

type OutterProps = {};

type StateProps = {
    error?: string;
    data: {
        [key: string]: string;
    };
};

type DispatchProps = {};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            {props.error == null ? (
                <ul>
                    {Object.entries(props.data).map(e => (
                        <li key={e[0]}>{e[1]}</li>
                    ))}
                </ul>
            ) : (
                <span>{props.error}</span>
            )}
        </div>
    );
};

const mapStateToProps = (
    state: RootState,
    _ownProps: OutterProps
): StateProps => ({
    error: state.api.error,
    data: state.api.data,
});

const mapDispatchToProps = (
    _dispatch: Dispatch<Action>,
    _ownProps: OutterProps
): DispatchProps => ({});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(component);
