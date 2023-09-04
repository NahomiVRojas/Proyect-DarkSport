import style from "../NavMembers/NavMembers.module.css"
import CoachDaniel from "../../views/images/DanielGonzales.png"
import CoachEssau from "../../views/images/CoachEssau.png"
import CoachIrin from "../../views/images/IrinStark.png"
import GildoVillanueva from "../../views/images/GildoVillanueva.png"
import JavierRojas from "../../views/images/JavierRojas.png"
import BrayhamPhysio from "../../views/images/BrayhamDelgado.png"

export default function MembersLi() {
    return (
        <>
            <div>
                <div>
                    <img src={CoachDaniel}></img>
                    <h1>Daniel Gonzales</h1>
                    <p>Coach Level III - Argentina, Former Coach in the Argentine League, Head Coach of Rayo AQP, Former Coach in the Mitre Association Argentina, Former Coach in Tierra del Fuego Argentina.</p>
                </div>
                <div>
                    <img src={CoachEssau}></img>
                    <h1>ESSAU RAMOS</h1>
                    <p> No description</p>
                </div>
                <div>
                    <img src={CoachIrin}></img>
                    <h1>IRIN STARK</h1>
                    <p> No description</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={GildoVillanueva}></img>
                    <h1>GILDO VILLANUEVA</h1>
                    <p> No description</p>
                </div>
                <div>
                    <img src={JavierRojas}></img>
                    <h1>JAVIER ROJAS</h1>
                    <p> No description</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={BrayhamPhysio}></img>
                    <h1>BRAYHAM DELGADO</h1>
                    <p> No description</p>
                </div>
            </div>
        </>
    )
}