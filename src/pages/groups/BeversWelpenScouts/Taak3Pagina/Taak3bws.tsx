import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Taak1Pagina/Taak1bws.css';

function Taak3bws() {
    const navigate = useNavigate();
    const [scores, setScores] = useState<string[]>(() => {
        const saved = localStorage.getItem('bws-taak3');
        return saved ? JSON.parse(saved) : Array(5).fill('');
    });

    useEffect(() => {
        localStorage.setItem('bws-taak3', JSON.stringify(scores));
    }, [scores]);

    const [warning, setWarning] = useState(false);

    const handleNext = () => {
        if (scores.some(s => s === '')) {
            setWarning(true);
            return;
        }
        navigate("/bevers-welpen-scouts/score");
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
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-1")}>Taak 1</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-2")}>Taak 2</button>
                    <button className="nav-button active" id="uitleg-button" onClick={() => navigate("/bevers-welpen-scouts/taak-3")}>Taak 3</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS
                        <div className="title-subtitle">Vertegenwoordiging team binnen en buiten groep</div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[0]} onChange={e => updateScore(0, e.target.value)} />
                            <span className="task-text">Actief participeren in overleg met eigen inbreng en afstemmig.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[1]} onChange={e => updateScore(1, e.target.value)} />
                            <span className="task-text">Inzien noodzaak juiste taakverdeling.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[2]} onChange={e => updateScore(2, e.target.value)} />
                            <span className="task-text">Eigen werkzaamheden afstemmen met overige teamleden.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[3]} onChange={e => updateScore(3, e.target.value)} />
                            <span className="task-text">Op bekwame wijze speleenheid vertegenwoordigen binnen groep (contacten andere teamleiders, aanspreekpunt ouders).</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[4]} onChange={e => updateScore(4, e.target.value)} />
                            <span className="task-text">Op bekwame wijze speleenheid vertegenwoordigen buiten groep (contacten teamleiders andere groepen, regio).</span>
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

export default Taak3bws;
