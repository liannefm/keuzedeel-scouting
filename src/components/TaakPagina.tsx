import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import './shared.css';

interface TaakPaginaProps {
    groupBase: string;
    storageKey: string;
    title: string;
    subtitle: string;
    taskGroups: string[][];
    nextRoute: string;
    activePage: 'taak-1' | 'taak-2' | 'taak-3';
}

function TaakPagina({ groupBase, storageKey, title, subtitle, taskGroups, nextRoute, activePage }: TaakPaginaProps) {
    const navigate = useNavigate();
    const totalItems = taskGroups.reduce((sum, g) => sum + g.length, 0);

    const [scores, setScores] = useState<string[]>(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : Array(totalItems).fill('');
    });

    const [warning, setWarning] = useState(false);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(scores));
    }, [scores, storageKey]);

    useEffect(() => {
        if (warning && scores.every(s => s !== '')) {
            setWarning(false);
        }
    }, [scores, warning]);

    const handleNext = () => {
        if (scores.some(s => s === '')) {
            setWarning(true);
            return;
        }
        navigate(nextRoute);
    };

    const updateScore = (index: number, value: string) => {
        if (value !== '' && (parseInt(value) < 1 || parseInt(value) > 5 || isNaN(parseInt(value)))) return;
        const next = [...scores];
        next[index] = value;
        setScores(next);
    };

    let itemIndex = 0;

    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <NavBar groupBase={groupBase} activePage={activePage} />
                <div id="container-explanation">

                    <div className="title-block">
                        {title}
                        <div className="title-subtitle">{subtitle}</div>
                    </div>

                    {taskGroups.map((group, gi) => (
                        <div className="task-group" key={gi}>
                            {group.map((text) => {
                                const idx = itemIndex++;
                                return (
                                    <div className="task-row" key={idx}>
                                        <input
                                            type="number"
                                            className="score-input"
                                            min="1"
                                            max="5"
                                            value={scores[idx]}
                                            onChange={e => updateScore(idx, e.target.value)}
                                        />
                                        <span className="task-text">{text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    {warning && <div className="warning-message">Vul alle velden in voordat je verder gaat.</div>}

                    <div className="next-button-row">
                        <button className="next-button" onClick={handleNext}>
                            Volgende &nbsp; &#10230;
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TaakPagina;
