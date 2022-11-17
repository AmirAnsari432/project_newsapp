import "./App.css";
import Navbar from "./Component/NavBar";
import News from "./Component/News";

function App() {
  return (
    <div>
      <Navbar />
      <News pageSize={6} country="in" category="science" />
    </div>
  );
}

export default App;
