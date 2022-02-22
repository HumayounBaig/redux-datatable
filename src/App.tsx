import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Datatable } from './components/datatable';

const Home: React.FC = () => (
  <Link to="/orders">
    View Orders
  </Link>
)

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='orders' element={<Datatable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
