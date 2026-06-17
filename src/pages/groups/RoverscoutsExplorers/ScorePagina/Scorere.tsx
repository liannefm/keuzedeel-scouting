import ScorePagina from '../../../../components/ScorePagina';

const tasks = [
    { storageKey: 're-taak1', label: 'Taak 1', sublabel: 'Coördinerende en teamgerichte taken' },
    { storageKey: 're-taak2', label: 'Taak 2', sublabel: 'Kwaliteitsbewaking team en activiteitenprogramma' },
    { storageKey: 're-taak3', label: 'Taak 3', sublabel: 'Vertegenwoordiging team binnen en buiten groep' },
];

function Scorere() {
    return (
        <ScorePagina
            groupBase="/roverscouts-explorers"
            title="KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS"
            tasks={tasks}
        />
    );
}

export default Scorere;
