import React from "react";
import Click from "./Click";

function CreatePost () {
    return (
        <div>
            글작성<br/>
            제목<br/>
            <input
            placeholder="title"/><br/>
            내용<br/>
            <input
            placeholder="body"/><br/>
            <button>작성완료</button>
        </div>
    );
}

export default CreatePost;