import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';

export default function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Dashboard/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
    </>
  );
}