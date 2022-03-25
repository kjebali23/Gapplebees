import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/MainPage';
import About from './Pages/MainPage/About';
import Features from './Pages/MainPage/Features';
import Contact from './Pages/MainPage/Contact';
import MatchPage from './Pages/MatchPage';
import Login from './Pages/AuthPages/Login'
import SignUp from './Pages/AuthPages/SignUp'


function App() {
    

    
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/About'  element={<About/>}/>
          <Route path='/Features'  element={<Features/>}/>
          <Route path='/Contact-Us'  element={<Contact/>}/>
          <Route path='/Race'  element={<MatchPage/>}/>  
          <Route path='/login'  element={<Login/>}/>
          <Route path='/sign-up'  element={<SignUp/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
