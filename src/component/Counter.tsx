import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../modules';

type OutterProps = {
    label: string;
};

type StateProps = {
    value: number;
};

type Props = OutterProps & StateProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            <span>{`${props.label}: ${props.value.toString()}`}</span>
        </div>
    );
};

const mapStateToProps = (state: RootState): StateProps => ({
    value: state.counter.counter,
});

export default connect<StateProps, {}, OutterProps, RootState>(mapStateToProps)(
    component
);
