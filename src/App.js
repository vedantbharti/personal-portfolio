import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='*' element={<div>404 not found</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
