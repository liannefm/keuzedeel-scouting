import TaakPagina from '../../../../components/TaakPagina';

const taskGroups = [
    [
        'Belang van de kwaliteit van het activiteitenprogramma.',
        'Bewaken kwalititeit van het activiteitenprogramma, rekening houdend met de progressiematrix.',
    ],
    [
        'Actieve rol aannemen in begeleiding nieuwe teamleden tijdens introductiefase.',
        'Kwaliteit leidingteam bewaken, in overleg met team',
        'Kwaliteit leidingteam verbeteren, in overleg met team',
        'Kwaliteit leidingteam bewaken, in overleg met groeps- en praktijkbegeleider',
        'Kwaliteit leidingteam verbeteren, in overleg met groeps- en praktijkbegeleider',
        'Ontwikkelplan team opstellen, in overleg met groeps- em praktijkbegeleider',
    ],
    [
        'Complexe leeftijds- en gedragskenmerken in de eigen en naastliggende speltak verklaren, rekening houdend met ontwikkeling brein.',
    ],
    [
        'Binnen leidingteam reflecteren op elkaars houding en gedrag.',
        'Stimuleren en motiveren teamleden in houdig en gedrag goed voorbeeld te geven.',
    ],
    [
        'Initiatief (regelmatig) teamoverleg en evaluatie leidingteam.',
        'Zorgen zinvol overleg/evaluatie voor samenwerking en kwaliteit van spel.',
    ],
];

function Taak2bws() {
    return (
        <TaakPagina
            groupBase="/bevers-welpen-scouts"
            storageKey="bws-taak2"
            title="KWALIFICATIEKAART TEAMLEIDING BEVERS/WELPEN/SCOUTS"
            subtitle="Kwaliteitsbewaking team en activiteitenprogramma"
            taskGroups={taskGroups}
            nextRoute="/bevers-welpen-scouts/taak-3"
            activePage="taak-2"
        />
    );
}

export default Taak2bws;
