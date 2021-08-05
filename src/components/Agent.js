import React from 'react';
import Agentbox from './Agentbox';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';

const Agent = () => {
    return (
        <div className="agent">
            <div className="a-heading">
              <h1>Agents</h1>
              <p>Lorem dolor sit amet, consectetur adipisicing elit and preciseh</p>
            </div>
            <div className="b-container">
                <Agentbox image={s1} name="Tom" />
                <Agentbox image={s2} name="Robert" />
                <Agentbox image={s3} name="Lara" />

            </div>
        </div>
    )
}

export default Agent
