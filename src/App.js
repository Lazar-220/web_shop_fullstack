import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Pocetna from './components/Pocetna.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Pocetna/>} />
        </Routes>
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
