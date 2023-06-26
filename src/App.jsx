import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import NormalComponent from "./Components/NormalComponent";
import ReactQueryComponent from "./Components/ReactQueryComponent";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/normal-component">Normal Componenet</Link>
          </li>
          <li>
            <Link to="/react-query-component">React Query Component</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal-component" element={<NormalComponent />} />
        <Route
          path="/react-query-component"
          element={<ReactQueryComponent />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
