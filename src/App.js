import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';
import Header from './views/Header/Header';
import Home from './views/Home/Home'

function App() {

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
