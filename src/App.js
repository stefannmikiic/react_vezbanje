
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import './App.css';
import Brojac from './mojeKomponente/Brojac';
import LoginKomponenta from './mojeKomponente/LoginKomponenta';
import MojiRecepti from './mojeKomponente/MojiRecepti';
import Pozdrav from './mojeKomponente/Pozdrav';
import Navbar from './mojeKomponente/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pocetna" element={<Pozdrav ime = "Stefan" />} />
        <Route path="/login" element={<LoginKomponenta />} />
        <Route path="/recepti" element={<MojiRecepti />} />
        <Route path="/brojac" element={<Brojac />} />
      </Routes>

      </BrowserRouter>







      {/* <h1 className='title'>Moja React Aplikacija</h1>
      <MojiRecepti> </MojiRecepti> */}
      
    </>
    
  );
}

export default App;
