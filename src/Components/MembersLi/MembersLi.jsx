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
      {selectedTab === 'BASKETBALL COACHES' && (
        <div className={style.teamCoaches}>
          <div className={style.divMember}>
            <img src={CoachDaniel} alt="Daniel Gonzales" className={style.imgDaniel} />
            <h1 className={style.nameMember}>DANIEL GONZALES</h1>
            <p className={style.pMember}>Coach Level III - Argentina, Former Coach in the Argentine League, Head Coach of Rayo AQP, Former Coach in the Mitre Association Argentina, Former Coach in Tierra del Fuego Argentina.</p>
          </div>
          <div className={style.divMember}>
            <img src={CoachEssau} alt="Essau Ramos" className={style.imgEssau} />
            <h1 className={style.nameMember}>ESAU RAMOS</h1>
            <p className={style.pMemberE}> Professional basketball player, fitness trainer, youth basketball coach.
              Diploma in Educational and Therapeutic Psychomotricity
              Diploma in Educational and Therapeutic Psychomotricity, courses in Mexico as a youth coach with recognitions</p>
          </div>
          <div className={style.divMember}>
            <img src={CoachIrin} alt="Irin Stark" className={style.imgIrin} />
            <h1 className={style.nameMember}>IRIN STARK</h1>
            <p className={style.pMember}> 15 years Basketball camp coach,
              5 years Personal trainer,
              6 years Basketball skill coach,
              USA basketball certified,
              10 years professional basketball player,
              St Thomas Aquinas college</p>
          </div>
        </div>
      )}
      {selectedTab === 'PSYCHOLOGISTS ON THE TEAM' && (
        <div className={style.teamPsycologist}>
          <div className={style.divMember}>
            <img src={GildoVillanueva} alt="Gildo Villanueva" className={style.imgGildo} />
            <h1 className={style.nameMember}>GILDO VILLANUEVA</h1>
            <p className={style.pMember}> Bachelor's degree in psychology, high-performance athlete since childhood. With experience in psychology and athletic skills that provide a unique and valuable perspective to tackle challenges in both the field of the human mind and high-level sports.</p>
          </div>
          <div className={style.divMember}>
            <img src={JavierRojas} alt="Javier Rojas" className={style.imgJavier} />
            <h1 className={style.nameMember}>JAVIER ROJAS</h1>
            <p className={style.pMember}> No description</p>
          </div>
        </div>
      )}
      {selectedTab === 'PHYSIOTHERAPIST' && (
        <div className={style.teamTerapist}>
          <div className={style.divMember}>
            <img src={BrayhamPhysio} alt="Brayham Delgado" className={style.imgBrayham} />
            <h1 className={style.nameMember}>BRAYHAM DELGADO</h1>
            <p className={style.pMember}> Profession: Specialized Physiotherapist in Sports Therapy, Geriatric Therapy, and Pediatric Therapy
              Experience: Over 4 years of experience in sports physiotherapy and rehabilitation.</p>
          </div>
        </div>
      )}
    </>
  );
}
