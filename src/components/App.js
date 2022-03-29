import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Quiz from './Quiz';

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Dashboard/>} />
            <Route path="/quiz" element={<Quiz/>} />
          </Routes>
        </AuthProvider>
        </Router>
    </>
  );
}