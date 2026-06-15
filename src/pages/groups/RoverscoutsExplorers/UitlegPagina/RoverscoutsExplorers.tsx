import { useNavigate } from 'react-router-dom';
import './RoverscoutsExplorers.css';

function RoverscoutsExplorers() {
    const navigate = useNavigate();
    return (
        <div id="background-explanation">
            <div id="body-explanation">
                <button className="home-button" onClick={() => navigate("/")}>&#8592; Homepagina</button>
                <div className="button-row">
                    <button className="nav-button active" id="uitleg-button">Uitleg</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-1")}>Taak 1</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-2")}>Taak 2</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/taak-3")}>Taak 3</button>
                    <button className="nav-button" onClick={() => navigate("/roverscouts-explorers/score")}>Score</button>
                </div>
                <div id="container-explanation">

                    <div className="title-block">
                        KWALIFICATIEKAART TEAMLEIDING EXPLORERS/ ADVISEUR ROVERSCOUTS
                    </div>

                    <div className="card-row">
                        <div className="card large">
                            <h2>Hoofdtaken</h2>
                            <ul>
                                <li>1. Coördinerende en teamgerichte taken</li>
                                <li>2. Kwaliteitsbewaking team en activiteitenprogramma</li>
                                <li>3. Vertegenwoordiging team binnen en buiten groep</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card-row">
                        <div className="card medium">
                            <h2>Uitleg</h2>
                            <p>Op het volgende tabblad vind je de onderdelen van de kwalificatie die betrekking hebben op jou als leidinggevende binnen scouting.</p>
                            <p>Geef bij ieder onderdeel (gele cellen) aan in hoeverre je hiermee bekend bent of het beheerst (schaal van 1 t/m 5).</p>
                            <p>De schaal is opvolgend. Wanneer je ervan weet, maar het nog nooit hebt gebruikt en het wel aan een ander kan uitleggen, scoor je 2.</p>
                            <p>Deze meting is bedoeld om te kijken welke onderdelen je al denkt te beheersen en welke je denkt te kunnen verbeteren.</p>
                            <p>Als je alle onderdelen hebt ingevuld, is op het laatste tabblad "Score" te zien wat je score is.</p>
                            <p>Er zal dan duidelijk worden welk thema's in meer of minder mate aandacht nodig hebben.</p>
                            <p>Hierop zullen verdere workshops en gesprekken met je praktijkbegeleider afgestemd worden.</p>
                            <p>Beantwoord de vragen zo eerlijk mogelijk. Er bestaat geen goed of fout, je kunt er enkel van leren!</p>
                        </div>

                        <div className="card small">
                            <h2>Score</h2>
                            <ul className="score-list">
                                <li>1. is mij onbekend/ kan ik niet</li>
                                <li>2. ik weet ervan, maar heb het nog nooit gebruikt</li>
                                <li>3. ik weet het en kan het toepassen</li>
                                <li>4. ik kan het toepassen in andere situaties/omstandigheden</li>
                                <li>5. ik kan een ander uitleggen wat het is en hoe je het kan toepassen</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RoverscoutsExplorers;
