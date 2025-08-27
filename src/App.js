import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import GoogleSearch from './GoogleSearch';

function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route element={<GoogleSearch />} path='/search'/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
