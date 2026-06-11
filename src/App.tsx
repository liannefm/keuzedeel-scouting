import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.tsx';

// Bevers/Welpen/Scouts
import BeversWelpenScouts from './pages/groups/BeversWelpenScouts/UitlegPagina/BeversWelpenScouts.tsx';
import Taak1bws from './pages/groups/BeversWelpenScouts/Taak1Pagina/Taak1bws.tsx';
import Taak2bws from './pages/groups/BeversWelpenScouts/Taak2Pagina/Taak2bws.tsx';
import Taak3bws from './pages/groups/BeversWelpenScouts/Taak3Pagina/Taak3bws.tsx';
import Scorebws from './pages/groups/BeversWelpenScouts/ScorePagina/Scorebws.tsx';

// Roverscouts/Explorers
import RoverscoutsExplorers from './pages/groups/RoverscoutsExplorers/UitlegPagina/RoverscoutsExplorers.tsx';
import Taak1re from './pages/groups/RoverscoutsExplorers/Taak1Pagina/Taak1re.tsx';
import Taak2re from './pages/groups/RoverscoutsExplorers/Taak2Pagina/Taak2re.tsx';
import Taak3re from './pages/groups/RoverscoutsExplorers/Taak3Pagina/Taak3re.tsx';
import Scorere from './pages/groups/RoverscoutsExplorers/ScorePagina/Scorere.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Bevers/Welpen/Scouts */}
        <Route path="/bevers-welpen-scouts" element={<BeversWelpenScouts />} />
        <Route path="/bevers-welpen-scouts/taak-1" element={<Taak1bws />} />
        <Route path="/bevers-welpen-scouts/taak-2" element={<Taak2bws />} />
        <Route path="/bevers-welpen-scouts/taak-3" element={<Taak3bws />} />
        <Route path="/bevers-welpen-scouts/score" element={<Scorebws />} />

        {/* Roverscouts/Explorers */}
        <Route path="/roverscouts-explorers" element={<RoverscoutsExplorers />} />
        <Route path="/roverscouts-explorers/taak-1" element={<Taak1re />} />
        <Route path="/roverscouts-explorers/taak-2" element={<Taak2re />} />
        <Route path="/roverscouts-explorers/taak-3" element={<Taak3re />} />
        <Route path="/roverscouts-explorers/score" element={<Scorere />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
