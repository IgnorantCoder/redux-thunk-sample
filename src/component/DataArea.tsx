import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../modules';

type StateProps = {
    error?: string;
    data: {
        [key: string]: string;
    };
};

type Props = StateProps;

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

const mapStateToProps = (state: RootState): StateProps => ({
    error: state.api.error,
    data: state.api.data,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(
    component
);
