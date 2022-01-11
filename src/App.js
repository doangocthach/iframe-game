import logo from "./logo.svg";
import "./App.css";
import Unity, { UnityContext } from "react-unity-webgl";
const unityContext = new UnityContext({
  loaderUrl: "Game/Build/79ee586ae1671f205165438ad3b6b5e1.js",
  dataUrl: "Game/Build/ad1bc009e98f1d71c139cf9a06f7b826.data.unityweb",
  frameworkUrl: "Game/Build/cdb3b235aac54ce73a2a136863106d3e.js.unityweb",
  codeUrl: "Game/Build/e4a8ce7cae33d1bcfbb68cf175b45a36.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "New Unity Project (1)",
  productVersion: "1.0",
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <iframe width="100%" height="100%" className="iframe-game" title="iframe" src="/game/index.html" /> */}
        <Unity unityContext={unityContext} style={{
          width: '100%',
          height: "100%"
        }}/>
      </header>
    </div>
  );
}

export default App;
