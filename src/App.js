import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavMenu from "./NavmenuComponents/Navmenu";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import DataScience from "./Pages/DataScience";
import CyberSecurity from "./Pages/CyberSecurity";
import Career from "./Pages/Career";

const App = () => {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route exact path="/" Component={All} />
        <Route exact path="/FullStack" Component={FullStack} />
        <Route exact path="/DataScience" Component={DataScience} />
        <Route exact path="/CyberSecurity" Component={CyberSecurity} />
        <Route exact path="/Career" Component={Career} />
      </Routes>
    </div>
  );
};

export default App;
