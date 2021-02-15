import './App.css';
import SearchPage from './Pages/SearchPage';
import WeatherPage from './Pages/WeatherPage';
import SkiSenterPage from "./Pages/SkiSenterPage";
import VarsomPage from "./Pages/VarsomPage";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <div>
      <Switch>
        <Route path={"/WeatherData"} exact component={WeatherPage} />
        <Route path={"/SkiSenter"} exact component={SkiSenterPage} />
        <Route path={"/avalanche"} exact component={VarsomPage} />
        <Route path={"/"} exact component={SearchPage} />
        <Redirect to={"/"}/>
      </Switch>
      <NavBar/>
    </div>
  );
}
export default App;
