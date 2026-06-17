import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import './shared.css';

interface ScoreTask {
    storageKey: string;
    label: string;
    sublabel: string;
}

interface ScorePaginaProps {
    groupBase: string;
    title: string;
    tasks: ScoreTask[];
}

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

function barColor(percentage: number): string {
    if (percentage < 40) return '#ff6b6b';
    if (percentage < 70) return '#ffd549';
    return '#51cf66';
}

function ScorePagina({ groupBase, title, tasks }: ScorePaginaProps) {
    const navigate = useNavigate();
    const [, setRefresh] = useState(0);

    const taskScores = tasks.map(t => ({
        ...t,
        score: sumScores(t.storageKey),
        max: maxScore(t.storageKey),
    }));

    const totaal = taskScores.reduce((s, t) => s + t.score, 0);
    const maxTotaal = taskScores.reduce((s, t) => s + t.max, 0);

    const handleReset = () => {
        tasks.forEach(t => localStorage.removeItem(t.storageKey));
        setRefresh(n => n + 1);
        navigate(groupBase);
    };

    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <NavBar groupBase={groupBase} activePage="score" />
                <div id="container-explanation">

                    <div className="title-block">
                        {title}
                        <div className="title-subtitle">Score overzicht</div>
                    </div>

                    <div className="score-overview">
                        {taskScores.map((t, i) => {
                            const pct = t.max > 0 ? (t.score / t.max) * 100 : 0;
                            return (
                                <div className="score-card" key={i}>
                                    <span className="score-label">{t.label}</span>
                                    <span className="score-sublabel">{t.sublabel}</span>
                                    <span className="score-value">{t.score} / {t.max}</span>
                                    <div className="score-bar-container">
                                        <div
                                            className="score-bar"
                                            style={{ width: `${pct}%`, backgroundColor: barColor(pct) }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                        <div className="score-card total">
                            <span className="score-label">Totaal</span>
                            <span className="score-value">{totaal} / {maxTotaal}</span>
                            {maxTotaal > 0 && (
                                <div className="score-bar-container">
                                    <div
                                        className="score-bar"
                                        style={{
                                            width: `${(totaal / maxTotaal) * 100}%`,
                                            backgroundColor: barColor((totaal / maxTotaal) * 100),
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="next-button-row">
                        <button className="reset-button" onClick={handleReset}>
                            Opnieuw beginnen
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ScorePagina;
