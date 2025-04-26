import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav1 from "./components/nav/Nav1";
import Nav2 from "./components/nav/Nav2";
import RoutesLinks from "./components/Routes/Routes";
import CopyRight from "./components/copy_right/CopyRight";
function App() {
  console.log('ahmeed shalaby')
  return (
    <BrowserRouter>
      <div className="App">
        <Nav1 />
        <Nav2 />
        <RoutesLinks />
        <CopyRight />
      </div>
    </BrowserRouter>
  );
}
export default App;
