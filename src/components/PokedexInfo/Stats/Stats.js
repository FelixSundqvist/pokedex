import React from 'react';
import Title from '../Title/Title';
const AllStats = React.lazy(() => import('./AllStats'));

const Stats = props => {
    const stats = props.show ? <AllStats stats={props.stats} /> : null;
    return(
        <div>
            <Title onClick={props.onClick} show={props.show}>Base Stats</Title>
            {stats}
        </div>
    )
}

export default Stats;