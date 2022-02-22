import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Datatable } from './components/datatable';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='orders' element={<Datatable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
