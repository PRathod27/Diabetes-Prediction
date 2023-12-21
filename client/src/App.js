import AllRoutes from './AllRoutes';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
