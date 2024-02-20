import React from "react";
import logo from './logo.svg';

function Head({props}) {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <strong>React로 만든<br/>
            CRUD 게시판</strong>
        </div>
    );
}   

export default Head