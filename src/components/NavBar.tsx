import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    groupBase: string;
    activePage: 'uitleg' | 'taak-1' | 'taak-2' | 'taak-3' | 'score';
}

const pages = [
    { key: 'uitleg', label: 'Uitleg', suffix: '' },
    { key: 'taak-1', label: 'Taak 1', suffix: '/taak-1' },
    { key: 'taak-2', label: 'Taak 2', suffix: '/taak-2' },
    { key: 'taak-3', label: 'Taak 3', suffix: '/taak-3' },
    { key: 'score', label: 'Score', suffix: '/score' },
];

function NavBar({ groupBase, activePage }: NavBarProps) {
    const navigate = useNavigate();

    return (
        <>
            <button className="home-button" onClick={() => navigate("/")}>&#8592; Homepagina</button>
            <div className="button-row">
                {pages.map(p => (
                    <button
                        key={p.key}
                        className={`nav-button${p.key === activePage ? ' active' : ''}`}
                        onClick={() => navigate(groupBase + p.suffix)}
                    >
                        {p.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default NavBar;
