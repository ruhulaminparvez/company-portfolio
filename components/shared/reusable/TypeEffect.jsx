import React, { Fragment } from 'react';
import Typewriter from 'typewriter-effect';

const TypeEffect = ({ arrList }) => {
    return (
        <Fragment>
            <Typewriter
                options={{
                    strings: arrList,
                    autoStart: true,
                    loop: true,
                }}
            />
        </Fragment>
    );
};

export default TypeEffect;