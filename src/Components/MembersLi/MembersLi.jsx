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
                  <div className={style.divMember}>
                    <img src={CoachDaniel} alt="Daniel Gonzales" className={style.imgDaniel}/>
                    <h1 className={style.nameMember}>DANIEL GONZALES</h1>
                    <p className={style.pMember}>Coach Level III - Argentina, Former Coach in the Argentine League, Head Coach of Rayo AQP, Former Coach in the Mitre Association Argentina, Former Coach in Tierra del Fuego Argentina.</p>
                  </div>
                  <div className={style.divMember}>
                    <img src={CoachEssau} alt="Essau Ramos" className={style.imgEssau}/>
                    <h1 className={style.nameMember}>ESSAU RAMOS</h1>
                    <p className={style.pMember}> No description</p>
                  </div>
                  <div className={style.divMember}>
                    <img src={CoachIrin} alt="Irin Stark" className={style.imgIrin}/>
                    <h1 className={style.nameMember}>IRIN STARK</h1>
                    <p className={style.pMember}> No description</p>
                  </div>
                </div>
              )}
            </div>
      
            {selectedTab === 'PSYCHOLOGISTS ON THE TEAM' && (
              <div className={style.teamPsycologist}>
                <div className={style.divMember}>
                  <img src={GildoVillanueva} alt="Gildo Villanueva" className={style.imgGildo} />
                  <h1 className={style.nameMember}>GILDO VILLANUEVA</h1>
                  <p className={style.pMember}> No description</p>
                </div>
                <div className={style.divMember}>
                  <img src={JavierRojas} alt="Javier Rojas" className={style.imgGildo}/>
                  <h1 className={style.nameMember}>JAVIER ROJAS</h1>
                  <p className={style.pMember}> No description</p>
                </div>
              </div>
            )}
      
            {selectedTab === 'PHYSIOTHERAPIST' && (
              <div className={style.teamTerapist}>
                <div className={style.divMember}>
                <img src={BrayhamPhysio} alt="Brayham Delgado" className={style.imgBrayham}/>
                <h1 className={style.nameMember}>BRAYHAM DELGADO</h1>
                <p className={style.pMember}> Profession: Specialized Physiotherapist in Sports Therapy, Geriatric Therapy, and Pediatric Therapy
Experience: Over 4 years of experience in sports physiotherapy and rehabilitation.</p>
                </div>
              </div>
            )}
          </>
        );
}
