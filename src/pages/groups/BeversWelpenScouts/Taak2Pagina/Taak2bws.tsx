import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Taak1Pagina/Taak1bws.css';

function Taak2bws() {
    const navigate = useNavigate();
    const [scores, setScores] = useState<string[]>(() => {
        const saved = localStorage.getItem('bws-taak2');
        return saved ? JSON.parse(saved) : Array(14).fill('');
    });

    useEffect(() => {
        localStorage.setItem('bws-taak2', JSON.stringify(scores));
    }, [scores]);

    const [warning, setWarning] = useState(false);

    const handleNext = () => {
        if (scores.some(s => s === '')) {
            setWarning(true);
            return;
        }
        navigate("/bevers-welpen-scouts/taak-3");
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
                    <button className="nav-button active" id="uitleg-button" onClick={() => navigate("/bevers-welpen-scouts/taak-2")}>Taak 2</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/taak-3")}>Taak 3</button>
                    <button className="nav-button" onClick={() => navigate("/bevers-welpen-scouts/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS
                        <div className="title-subtitle">Kwaliteitsbewaking team en activiteitenprogramma</div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[0]} onChange={e => updateScore(0, e.target.value)} />
                            <span className="task-text">Belang van de kwaliteit van het activiteitenprogramma.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[1]} onChange={e => updateScore(1, e.target.value)} />
                            <span className="task-text">Bewaken kwalititeit van het activiteitenprogramma, rekening houdend met de progressiematrix.</span>
                        </div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[2]} onChange={e => updateScore(2, e.target.value)} />
                            <span className="task-text">Actieve rol aannemen in begeleiding nieuwe teamleden tijdens introductiefase.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[3]} onChange={e => updateScore(3, e.target.value)} />
                            <span className="task-text">Kwaliteit leidingteam bewaken, in overleg met team</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[4]} onChange={e => updateScore(4, e.target.value)} />
                            <span className="task-text">Kwaliteit leidingteam verbeteren, in overleg met team</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[5]} onChange={e => updateScore(5, e.target.value)} />
                            <span className="task-text">Kwaliteit leidingteam bewaken, in overleg met groeps- en praktijkbegeleider</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[6]} onChange={e => updateScore(6, e.target.value)} />
                            <span className="task-text">Kwaliteit leidingteam verbeteren, in overleg met groeps- en praktijkbegeleider</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[7]} onChange={e => updateScore(7, e.target.value)} />
                            <span className="task-text">Ontwikkelplan team opstellen, in overleg met groeps- em praktijkbegeleider</span>
                        </div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[8]} onChange={e => updateScore(8, e.target.value)} />
                            <span className="task-text">Complexe leeftijds- en gedragskenmerken in de eigen en naastliggende speltak verklaren, rekening houdend met ontwikkeling brein.</span>
                        </div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[9]} onChange={e => updateScore(9, e.target.value)} />
                            <span className="task-text">Binnen leidingteam reflecteren op elkaars houding en gedrag.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[10]} onChange={e => updateScore(10, e.target.value)} />
                            <span className="task-text">Stimuleren en motiveren teamleden in houdig en gedrag goed voorbeeld te geven.</span>
                        </div>
                    </div>

                    <div className="task-group">
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[11]} onChange={e => updateScore(11, e.target.value)} />
                            <span className="task-text">Initiatief (regelmatig) teamoverleg en evaluatie leidingteam.</span>
                        </div>
                        <div className="task-row">
                            <input type="number" className="score-input" min="1" max="5" value={scores[12]} onChange={e => updateScore(12, e.target.value)} />
                            <span className="task-text">Zorgen zinvol overleg/evaluatie voor samenwerking en kwaliteit van spel.</span>
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

export default Taak2bws;
