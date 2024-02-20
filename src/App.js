import './App.css';
import CreatePost from './CreatePost';
import Click from './Click';
import Head from './Head';
import Contents from './Contents';
import { useState } from 'react';

function App() {
  const [state, setState] = useState("default");
  var nextState;
  const onChange = (nextState) => {
    setState(nextState);
  }


  // const [list, setList] = useState();
  // const [title, contents] = list;

  return (
    <div className="App">
      <Head />
      <div className="Board">
        <div className="list">글 목록<hr/></div>

        <div className="contents">글 내용<hr/></div>
        <Contents state={state} onChange={onChange} nextState={nextState}/>
      </div>
      <footer className="footer">
        .
      </footer>
    </div>
  );
}

export default App;
