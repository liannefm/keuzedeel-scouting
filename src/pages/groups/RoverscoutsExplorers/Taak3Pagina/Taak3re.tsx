import TaakPagina from '../../../../components/TaakPagina';

const taskGroups = [
    [
        'Actief participeren in overleg met eigen inbreng en afstemmig.',
        'Inzien noodzaak juiste taakverdeling.',
        'Eigen werkzaamheden afstemmen met overige teamleden.',
        'Op bekwame wijze speleenheid vertegenwoordigen binnen groep (contacten andere teamleiders, aanspreekpunt ouders/jongeren hierover adviseren).',
        'Op bekwame wijze speleenheid vertegenwoordigen buiten groep (contacten teamleiders andere groepen, regio).',
    ],
];

function Taak3re() {
    return (
        <TaakPagina
            groupBase="/roverscouts-explorers"
            storageKey="re-taak3"
            title="KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS"
            subtitle="Vertegenwoordiging team binnen en buiten groep"
            taskGroups={taskGroups}
            nextRoute="/roverscouts-explorers/score"
            activePage="taak-3"
        />
    );
}

export default Taak3re;
