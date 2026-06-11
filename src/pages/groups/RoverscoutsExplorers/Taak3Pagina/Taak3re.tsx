import { useNavigate } from 'react-router-dom';
import '../UitlegPagina/RoverscoutsExplorers.css';

function Taak3re() {
    const navigate = useNavigate();
    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <div className="button-row">
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers")}>Uitleg</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-1")}>Taak 1</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-2")}>Taak 2</button>
                    <button className="nav-button active" id="uitleg-button" onClick={() => navigate("/roverscouts-explorers/taak-3")}>Taak 3</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Taak3re;
