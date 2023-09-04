import style from "../NavMembers/NavMembers.module.css"
import CoachDaniel from "../../views/images/DanielGonzales.png"
import CoachEssau from "../../views/images/CoachEssau.png"
import CoachIrin from "../../views/images/IrinStark.png"
import GildoVillanueva from "../../views/images/GildoVillanueva.png"
import JavierRojas from "../../views/images/GildoVillanueva copy.png"
import BrayhamPhysio from "../../views/images/BrayhamDelgado.png"

export default function MembersLi({ selectedTab }) {
        return (
          <>
            <div className={style.allMembers}>
              {selectedTab === 'BASKETBALL COACHES' && (
                <div className={style.teamCoaches}>
                  <div className={style.divDaniel}>
                    <img src={CoachDaniel} alt="Daniel Gonzales" className={style.imgDaniel}/>
                    <h1 className={style.nameDaniel}>DANIEL GONZALES</h1>
                    <p className={style.pDaniel}>Coach Level III - Argentina, Former Coach in the Argentine League, Head Coach of Rayo AQP, Former Coach in the Mitre Association Argentina, Former Coach in Tierra del Fuego Argentina.</p>
                  </div>
                  <div className={style.divEssau}>
                    <img src={CoachEssau} alt="Essau Ramos" className={style.imgEssau}/>
                    <h1 className={style.nameEssau}>ESSAU RAMOS</h1>
                    <p className={style.pEssau}> No description</p>
                  </div>
                  <div className={style.divIrin}>
                    <img src={CoachIrin} alt="Irin Stark" className={style.imgIrin}/>
                    <h1 className={style.nameIrin}>IRIN STARK</h1>
                    <p className={style.pIrin}> No description</p>
                  </div>
                </div>
              )}
            </div>
      
            {selectedTab === 'PSYCHOLOGISTS ON THE TEAM' && (
              <div className={style.teamPsycologist}>
                <div className={style.divDaniel}>
                  <img src={GildoVillanueva} alt="Gildo Villanueva" className={style.imgGildo} />
                  <h1 className={style.nameDaniel}>GILDO VILLANUEVA</h1>
                  <p className={style.pIrin}> No description</p>
                </div>
                <div className={style.divDaniel}>
                  <img src={JavierRojas} alt="Javier Rojas" className={style.imgGildo}/>
                  <h1 className={style.nameDaniel}>JAVIER ROJAS</h1>
                  <p className={style.pIrin}> No description</p>
                </div>
              </div>
            )}
      
            {selectedTab === 'PHYSIOTHERAPIST' && (
              <div className={style.teamTerapist}>
                <div className={style.divDaniel}>
                <img src={BrayhamPhysio} alt="Brayham Delgado" className={style.imgGildo}/>
                <h1 className={style.nameDaniel}>BRAYHAM DELGADO</h1>
                <p className={style.pIrin}> No description</p>
                </div>
              </div>
            )}
          </>
        );
}
