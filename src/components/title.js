import React from 'react';

export default function Title({children,props}) {
    return (
    <h2 style={{fontFamily: 'Fugaz One', fontSize: '35px'}}>{children}</h2>
    );
}