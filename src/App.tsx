import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.tsx';

// Groups
import BeversWelpenScouts from './pages/groups/BeversWelpenScouts/UitlegPagina/BeversWelpenScouts.tsx';
import RoverscoutsExplorers from './pages/groups/RoverscoutsExplorers/UitlegPagina/RoverscoutsExplorers.tsx';

import Taak1bws from './pages/groups/BeversWelpenScouts/Taak1Pagina/Taak1bws.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Groups */}
        <Route path="/bevers-welpen-scouts" element={<BeversWelpenScouts />} />
        <Route path="/roverscouts-explorers" element={<RoverscoutsExplorers />} />
        <Route path="/bevers-welpen-scouts/taak-1" element={<Taak1bws />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
