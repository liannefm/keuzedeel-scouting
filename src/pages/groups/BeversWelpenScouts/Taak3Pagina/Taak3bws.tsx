import TaakPagina from '../../../../components/TaakPagina';

const taskGroups = [
    [
        'Actief participeren in overleg met eigen inbreng en afstemmig.',
        'Inzien noodzaak juiste taakverdeling.',
        'Eigen werkzaamheden afstemmen met overige teamleden.',
        'Op bekwame wijze speleenheid vertegenwoordigen binnen groep (contacten andere teamleiders, aanspreekpunt ouders).',
        'Op bekwame wijze speleenheid vertegenwoordigen buiten groep (contacten teamleiders andere groepen, regio).',
    ],
];

function Taak3bws() {
    return (
        <TaakPagina
            groupBase="/bevers-welpen-scouts"
            storageKey="bws-taak3"
            title="KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS"
            subtitle="Vertegenwoordiging team binnen en buiten groep"
            taskGroups={taskGroups}
            nextRoute="/bevers-welpen-scouts/score"
            activePage="taak-3"
        />
    );
}

export default Taak3bws;
