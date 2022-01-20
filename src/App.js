import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './Pages/MainPage';
import About from './Pages/about';
import Contact from './Pages/contactUs';
import Services from './Pages/services';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/About'  element={<About/>}/>
          <Route path='/Services'  element={<Services/>}/>
          <Route path='/Contact-Us'  element={<Contact/>}/>
        </Routes>
      </Router>

  );
}

export default App;
