import React from "react";

export function clickEnt({porps}) {
    return (
        <div>
          <button className="button"
          onClick={onclick}>글 작성</button>
          <button className="button" 
          onClick={onclick}>글 수정</button>
          <button className="button"
          onClick={onclick}>글 삭제</button>
        </div>
    );
}

export function createP({onChange, nextState="create"}) {
    return (
        <div>
          <button className="button"
          onClick={() => onChange(nextState)}
          >글 작성
          </button>
        </div>
    );
}

export function updateP({porps}) {
    return (
        <div>
          <button className="button" 
          onClick={onclick}>글 수정</button>
        </div>
    );
}

export function deleteP({porps}) {
    return (
        <div>
          <button className="button"
          onClick={onclick}>글 삭제</button>
        </div>
    );
}

export function readP({porps}) {
    return (
        <div>
          <button className="button"
          onClick={onclick}>글 삭제</button>
        </div>
    );
}

export function clickHead({porps}) {
    return (
        <div>
          <button className="button"
          onClick={onclick}>글 삭제</button>
        </div>
    );
}
