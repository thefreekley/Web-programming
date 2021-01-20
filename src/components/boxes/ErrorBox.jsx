import React from 'react';
import '../../accets/css/components-style/error-box.css'
import Button from "../Button";

function ErrorBox({closeFunc}) {
    return (
        <div className='error-box'>
            <p className="error-text">
                <b>Oh snap!</b> Change a few things up and try submitting again.
            </p>
            <Button value="✖"  type="button" align="center" className="close-button" onClick={closeFunc} />
        </div>
    );
}

export default ErrorBox;