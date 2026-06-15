import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Taak1bws.css';

function Taak1bws() {
    const navigate = useNavigate();
    const [scores, setScores] = useState<string[]>(() => {
        const saved = localStorage.getItem('bws-taak1');
        return saved ? JSON.parse(saved) : Array(8).fill('');
    });

    useEffect(() => {
        localStorage.setItem('bws-taak1', JSON.stringify(scores));
    }, [scores]);

    const [warning, setWarning] = useState(false);

    const handleNext = () => {
        if (scores.some(s => s === '')) {
            setWarning(true);
            return;
        }
        navigate("/bevers-welpen-scouts/taak-2");
    };

    const updateScore = (index: number, value: string) => {
        if (value !== '' && (parseInt(value) < 1 || parseInt(value) > 5 || isNaN(parseInt(value)))) return;
        const next = [...scores];
        next[index] = value;
        setScores(next);
    };

    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <button className="home-button" onClick={() => navigate("/")}>&#8592; Homepagina</button>
                <div className="button-row">
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts")}>Uitleg</button>
                    <button className="nav-button active" id="uitleg-button" onClick={() => navigate("/bevers-welpen-scouts/taak-1")}>Taak 1</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-2")}>Taak 2</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-3")}>Taak 3</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS
                        <div className="title-subtitle">Coördinerende en teamgerichte taken</div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[0]} onChange={e => updateScore(0, e.target.value)} />
                            <span className="task-text">Periodiek planning taken en werkzaamheden maken.</span>
                        </div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[1]} onChange={e => updateScore(1, e.target.value)} />
                            <span className="task-text">Bevorderen samenwerking leidingteam, zowel voor jeugdleden als voor leiding onderling.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[2]} onChange={e => updateScore(2, e.target.value)} />
                            <span className="task-text">Bevorderen gezamenlijke verantwoordelijkheid leidingteam, zowel voor jeugdleden als voor leiding onderling.</span>
                        </div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[3]} onChange={e => updateScore(3, e.target.value)} />
                            <span className="task-text">Tonen daadkracht ten aanzien van veiligheid en optreden indien nodig.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[4]} onChange={e => updateScore(4, e.target.value)} />
                            <span className="task-text">Leiderschap tonen bij crisis (voorspelbare situatie)</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[5]} onChange={e => updateScore(5, e.target.value)} />
                            <span className="task-text">Aanpassen eigen houding situatie van het moment.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[6]} onChange={e => updateScore(6, e.target.value)} />
                            <span className="task-text">Aanpassen eigen gedrag situatie van het moment.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[7]} onChange={e => updateScore(7, e.target.value)} />
                            <span className="task-text">Juist afhandelen ongeval (onvoospelbare situatie) richting jeugdlid en ouders, in samenwerking met groepsbestuur.</span>
                        </div>
                    </div>

                    {warning && <div className="warning-message">Vul alle velden in voordat je verder gaat.</div>}

                    <div className="next-button-row">
                        <button className="next-button" onClick={handleNext}>
                            Volgende &nbsp; ⟶
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Taak1bws;
