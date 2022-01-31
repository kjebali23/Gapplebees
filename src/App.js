import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './Pages/MainPage';
import About from './Pages/MainPage/About';
import Features from './Pages/MainPage/Features';
import Contact from './Pages/MainPage/Contact';
import MatchPage from './Pages/MatchPage';
import Slider from './Pages/MatchPage/Match/Slider/Slider'


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/About'  element={<About/>}/>
          <Route path='/Features'  element={<Features/>}/>
          <Route path='/Contact-Us'  element={<Contact/>}/>
          <Route path='/Race'  element={<MatchPage/>}/>          
          <Route path='/Test'  element={<Slider/>}/>          
          
        </Routes>
      </Router>
    </>

  );
}

export default App;
