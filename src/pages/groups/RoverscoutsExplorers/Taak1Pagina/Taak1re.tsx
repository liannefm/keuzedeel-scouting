import TaakPagina from '../../../../components/TaakPagina';

const taskGroups = [
    [
        'Periodiek planning taken en werkzaamheden maken (explo) of jongeren hierover adviseren (rover).',
    ],
    [
        'Bevorderen samenwerking leidingteam, zowel voor jeugdleden als voor leiding onderling.',
        'Bevorderen taakverdeling leidingteam, zowel voor jeugdleden als voor leiding onderling.',
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

function Taak1re() {
    return (
        <TaakPagina
            groupBase="/roverscouts-explorers"
            storageKey="re-taak1"
            title="KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS"
            subtitle="Coördinerende en teamgerichte taken"
            taskGroups={taskGroups}
            nextRoute="/roverscouts-explorers/taak-2"
            activePage="taak-1"
        />
    );
}

export default Taak1re;
