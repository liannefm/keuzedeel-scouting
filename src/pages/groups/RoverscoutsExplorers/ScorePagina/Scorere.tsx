import { useNavigate } from 'react-router-dom';
import '../UitlegPagina/RoverscoutsExplorers.css';

function sumScores(key: string): number {
    const saved = localStorage.getItem(key);
    if (!saved) return 0;
    const arr: string[] = JSON.parse(saved);
    return arr.reduce((sum, v) => sum + (parseInt(v) || 0), 0);
}

function maxScore(key: string): number {
    const saved = localStorage.getItem(key);
    if (!saved) return 0;
    const arr: string[] = JSON.parse(saved);
    return arr.length * 5;
}

function Scorere() {
    const navigate = useNavigate();

    const taak1 = sumScores('re-taak1');
    const taak2 = sumScores('re-taak2');
    const taak3 = sumScores('re-taak3');
    const totaal = taak1 + taak2 + taak3;

    const max1 = maxScore('re-taak1');
    const max2 = maxScore('re-taak2');
    const max3 = maxScore('re-taak3');
    const maxTotaal = max1 + max2 + max3;

    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <button className="home-button" onClick={() => navigate("/")}>&#8592; Homepagina</button>
                <div className="button-row">
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers")}>Uitleg</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-1")}>Taak 1</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-2")}>Taak 2</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-3")}>Taak 3</button>
                    <button className="nav-button active" id="uitleg-button" onClick={() => navigate("/roverscouts-explorers/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS
                        <div className="title-subtitle">Score overzicht</div>
                    </div>

                    <div className="score-overview">
                        <div className="score-card">
                            <span className="score-label">Taak 1</span>
                            <span className="score-sublabel">Coördinerende en teamgerichte taken</span>
                            <span className="score-value">{taak1} / {max1}</span>
                        </div>
                        <div className="score-card">
                            <span className="score-label">Taak 2</span>
                            <span className="score-sublabel">Kwaliteitsbewaking team en activiteitenprogramma</span>
                            <span className="score-value">{taak2} / {max2}</span>
                        </div>
                        <div className="score-card">
                            <span className="score-label">Taak 3</span>
                            <span className="score-sublabel">Vertegenwoordiging team binnen en buiten groep</span>
                            <span className="score-value">{taak3} / {max3}</span>
                        </div>
                        <div className="score-card total">
                            <span className="score-label">Totaal</span>
                            <span className="score-value">{totaal} / {maxTotaal}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Scorere;
