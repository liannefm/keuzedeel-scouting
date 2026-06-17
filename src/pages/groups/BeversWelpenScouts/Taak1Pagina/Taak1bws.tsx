import TaakPagina from '../../../../components/TaakPagina';

const taskGroups = [
    [
        'Periodiek planning taken en werkzaamheden maken.',
    ],
    [
        'Bevorderen samenwerking leidingteam, zowel voor jeugdleden als voor leiding onderling.',
        'Bevorderen gezamenlijke verantwoordelijkheid leidingteam, zowel voor jeugdleden als voor leiding onderling.',
    ],
    [
        'Tonen daadkracht ten aanzien van veiligheid en optreden indien nodig.',
        'Leiderschap tonen bij crisis (voorspelbare situatie)',
        'Aanpassen eigen houding situatie van het moment.',
        'Aanpassen eigen gedrag situatie van het moment.',
        'Juist afhandelen ongeval (onvoospelbare situatie) richting jeugdlid en ouders, in samenwerking met groepsbestuur.',
    ],
];

function Taak1bws() {
    return (
        <TaakPagina
            groupBase="/bevers-welpen-scouts"
            storageKey="bws-taak1"
            title="KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS"
            subtitle="Coördinerende en teamgerichte taken"
            taskGroups={taskGroups}
            nextRoute="/bevers-welpen-scouts/taak-2"
            activePage="taak-1"
        />
    );
}

export default Taak1bws;
