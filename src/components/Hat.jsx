import React from 'react';


function Hat(props) {
    return (
        <div className="hat" style={{
            backgroundImage: `url(${props.sendUrl})`
        }}>
            {props.children}
        </div>
    );

}

export default Hat;