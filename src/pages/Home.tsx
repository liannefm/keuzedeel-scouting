import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/scoutinglogo.png';

function Home() {
    const navigate = useNavigate();

    return (
        <div id="background-index">
            <div id="container-index">

                <img src={logo} alt='logo' id="scoutinglogo" />

                <button id="group1-button" onClick={() => navigate("/bevers-welpen-scouts")}>bevers / welpen / scouts</button>
                <button id="group2-button" onClick={() => navigate("/roverscouts-explorers")}>explorers / roverscouts</button>

            </div>
        </div>
    );
}

export default Home
