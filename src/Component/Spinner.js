import React from 'react';
import loading from './Funnel.gif';

const Spinner =()=>{
        return (
            <div>
                <img className="my-3" src={loading} style={{width:"40px", marginLeft: "50%"}}alt="loading" />
            </div>
        );
    };

export default Spinner;