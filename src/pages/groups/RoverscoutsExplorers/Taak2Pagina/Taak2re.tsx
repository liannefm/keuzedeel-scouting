import TaakPagina from '../../../../components/TaakPagina';

const taskGroups = [
    [
        'Belang van de kwaliteit van het activiteitenprogramma.',
        'Bewaken kwalititeit van het activiteitenprogramma samen met jongeren, rekening houdend met de progressiematrix.',
    ],
    [
        'Actieve rol aannemen in begeleiding nieuwe teamleden of coaches/adviseurs tijdens introductiefase.',
        'Kwaliteit leidingteam bewaken, in overleg met team',
        'Kwaliteit leidingteam verbeteren, in overleg met team',
        'Kwaliteit leidingteam (explo) of speltak (rover) bewaken, in overleg met groeps- en praktijkbegeleider',
        'Kwaliteit leidingteam (explo) of speltak (rover) verbeteren, in overleg met groeps- en praktijkbegeleider',
        'Ontwikkelplan team opstellen, in overleg met groeps- em praktijkbegeleider',
    ],
    [
        'Complexe leeftijds- en gedragskenmerken in de eigen en naastliggende speltak verklaren, rekening houdend met ontwikkeling brein.',
    ],
    [
        'Binnen leidingteam (explo) of de speltak (rover) reflecteren op elkaars houding en gedrag.',
        'Stimuleren en motiveren explorers, teamleden of roverscouts in houdig en gedrag goed voorbeeld te geven.',
    ],
    [
        'Initiatief (regelmatig) teamoverleg en evaluatie explorers en leidingteam (explo) of stambestuur, coaches en medeadviseurs (rovers).',
        'Zorgen zinvol overleg/evaluatie voor samenwerking en kwaliteit van spel.',
    ],
];

function Taak2re() {
    return (
        <TaakPagina
            groupBase="/roverscouts-explorers"
            storageKey="re-taak2"
            title="KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS"
            subtitle="Kwaliteitsbewaking team en activiteitenprogramma"
            taskGroups={taskGroups}
            nextRoute="/roverscouts-explorers/taak-3"
            activePage="taak-2"
        />
    );
}

export default Taak2re;
