import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import MatchPage from './Pages/MatchPage';

function Match() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/Race'  element={<MatchPage/>}/>
          </Routes>
        </Router>
      </>
  
    );
  }
  
  export default Match;