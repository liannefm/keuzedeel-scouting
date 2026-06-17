import ScorePagina from '../../../../components/ScorePagina';

const tasks = [
    { storageKey: 'bws-taak1', label: 'Taak 1', sublabel: 'Coördinerende en teamgerichte taken' },
    { storageKey: 'bws-taak2', label: 'Taak 2', sublabel: 'Kwaliteitsbewaking team en activiteitenprogramma' },
    { storageKey: 'bws-taak3', label: 'Taak 3', sublabel: 'Vertegenwoordiging team binnen en buiten groep' },
];

function Scorebws() {
    return (
        <ScorePagina
            groupBase="/bevers-welpen-scouts"
            title="KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS"
            tasks={tasks}
        />
    );
}

export default Scorebws;
