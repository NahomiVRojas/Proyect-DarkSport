import style from "../NavMembers/NavMembers.module.css"
import CoachDaniel from "../../views/images/DanielGonzales.png"
import CoachEssau from "../../views/images/CoachEssau.png"
import CoachIrin from "../../views/images/IrinStark.png"
import GildoVillanueva from "../../views/images/GildoVillanueva.png"
import JavierRojas from "../../views/images/JavierRojas.png"
import BrayhamPhysio from "../../views/images/BrayhamDelgado.png"

export default function MembersLi({ selectedTab }) {
        return (
          <>
            <div>
              {selectedTab === 'BASKETBALL COACHES' && (
                <div className={style.teamCoaches}>
                  <div>
                    <img src={CoachDaniel} alt="Daniel Gonzales" />
                    <h1>Daniel Gonzales</h1>
                    <p>Coach Level III - Argentina, Former Coach in the Argentine League, Head Coach of Rayo AQP, Former Coach in the Mitre Association Argentina, Former Coach in Tierra del Fuego Argentina.</p>
                  </div>
                  <div>
                    <img src={CoachEssau} alt="Essau Ramos" />
                    <h1>ESSAU RAMOS</h1>
                    <p> No description</p>
                  </div>
                  <div>
                    <img src={CoachIrin} alt="Irin Stark" />
                    <h1>IRIN STARK</h1>
                    <p> No description</p>
                  </div>
                </div>
              )}
            </div>
      
            {selectedTab === 'PSYCHOLOGISTS ON THE TEAM' && (
              <div>
                <div className={style.teamPsycologist}>
                  <img src={GildoVillanueva} alt="Gildo Villanueva" />
                  <h1>GILDO VILLANUEVA</h1>
                  <p> No description</p>
                </div>
                <div>
                  <img src={JavierRojas} alt="Javier Rojas" />
                  <h1>JAVIER ROJAS</h1>
                  <p> No description</p>
                </div>
              </div>
            )}
      
            {selectedTab === 'PHYSIOTHERAPIST' && (
              <div className={style.teamTerapist}>
                <img src={BrayhamPhysio} alt="Brayham Delgado" />
                <h1>BRAYHAM DELGADO</h1>
                <p> No description</p>
              </div>
            )}
          </>
        );
}
