import React from 'react';

export const Frame = (props) => (
      <div className='main' >
        <div className="left-aside"></div>
        { props.children }
        <div className="right-aside"></div>
      </div>
    )