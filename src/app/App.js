import React, { Component } from 'react';
import './app.css';
import ProjectList from '../projectlist/projectlist';

  let App = ()=>{
    return (
        <div>
            <div className="body">
                <ProjectList  />
            </div>
        </div>
    );
}

export default App;
