import { useNavigate } from 'react-router-dom';
import '../Taak1Pagina/Taak1bws.css';

function Taak2bws() {
    const navigate = useNavigate();
    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <div className="button-row">
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts")}>Uitleg</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-1")}>Taak 1</button>
                    <button className="nav-button active" id="uitleg-button" onClick={() => navigate("/bevers-welpen-scouts/taak-2")}>Taak 2</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-3")}>Taak 3</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Taak2bws;
