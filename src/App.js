import jsx from "./images/jsx.png"
import  "./style.css"
function App() {
  return (
    <div className="App">
     <h1 className="titleRed">  React</h1><br/>
     <img className="img1" src="/images/imageReact.png" alt="react"/><br/>
     <img className="img2" src ={jsx} alt ="jsxp"/><br/>
     <video  controls  src="/vedio/ReactJS Tutorial - 8 - JSX.mp4"/>

    </div>

  );
}

export default App;
