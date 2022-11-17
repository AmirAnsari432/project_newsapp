import "./App.css";
import Navbar from "./Component/NavBar";
import News from "./Component/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>

      <Navbar />
      <News pageSize={6} country="in" category="science" />
      </Router>

    </div>
  );
}

export default App;
