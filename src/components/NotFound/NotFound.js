import React from 'react';

const NotFound = () => {
    const error = {
        marginTop:'300px',
    }
    return (
        <div style={error} className="text-center justify-content-center">
                <h3>This was not Found Sorry...!</h3>
                <h1> ERROR 404 !!!</h1>
        </div>
    );
};

export default NotFound;