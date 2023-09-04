import React from 'react';
import Basket from "../../views/images/basket1.png"
import Football from "../../views/images/football1.png"
import Voley from "../../views/images/voley1.png"
import style from "../Vmo/Vmo.module.css"

export default function VisionMissionObjec() {
    return (
        <div className={style.vmoPusImages}>
            <div className={style.vmoAll}>
                <section className={style.divVision}>
                    <h1 className={style.h1Vmo}>VISION</h1>
                    <p className={style.pvmo}>
                        To be the leading agency for recruiting outstanding basketball athletes, focusing on identifying and nurturing talent from an early age, starting from 6 years old and up. Our vision is to be recognized nationally and internationally for our ability to discover and develop young basketball prospects, providing them with exceptional opportunities to reach their full potential in sports and in life.
                    </p>
                </section>
                <section className={style.divMission}>
                <h1 className={style.h1Vmo}>MISSION</h1>
                    <p className={style.pvmo}>
                        In our mission to recruit outstanding basketball athletes from the age of 6 and onwards, we are committed to providing a comprehensive development environment that fosters sports excellence, personal growth, and education. Our goal is to offer high-quality training programs, expert guidance, and competitive opportunities that enable young athletes to develop their technical, tactical, and mental skills while instilling values of teamwork, discipline, and perseverance. Through our holistic individual development-centered approach, we aim to forge leaders not only in basketball but also in society at large.
                    </p>
                </section>
                <section className={style.divObjectives}>
                <h1 className={style.h1Vmo}>OBJECTIVES</h1>
                    <ul>
                        <li className={style.liVmo}>
                            Talent Identification
                            <p>Identify and assess young basketball talents through early detection programs in schools, clubs, and sports events.</p>
                        </li>
                        <li className={style.liVmo}>
                            Comprehensive Development
                            <p>Design and provide training programs that address technical, tactical, and psychological aspects of basketball, focusing on the holistic development of athletes.</p>
                        </li>
                        <li className={style.liVmo}>
                            Mentorship and Guidance
                            <p>Offer individualized guidance and counseling to athletes, helping them set goals, plan their development, and balance their sports commitments with their education and personal life.</p>
                        </li>
                        <li className={style.liVmo}>
                            High-Level Competition
                            <p>Facilitate athletes participation in high-level competitions and tournaments, both nationally and internationally, to provide valuable experiences and growth opportunities.</p>
                        </li>
                        <li className={style.liVmo}>
                            Values Formation
                            <p>Promote values such as teamwork, work ethics, responsibility, and respect in athletes, emphasizing their development as leaders on and off the court.</p>
                        </li>
                        <li className={style.liVmo}>
                            Collaboration with Educational Institutions
                            <p>Establish strategic partnerships with schools and universities to ensure athletes receive a solid education and have options to continue their academic development.</p>
                        </li>
                        <li className={style.liVmo}>
                            Research and Continuous Improvement
                            <p>Conduct ongoing research and analysis to enhance our training programs and methodologies, ensuring alignment with the latest trends and advancements in basketball.</p>
                        </li>
                        <li className={style.liVmo}>
                            International Recognition
                            <p>Work towards the goal of being recognized as a leading basketball recruitment agency internationally, establishing a presence in different regions and participating in renowned sports events.</p>
                        </li>
                        <li className={style.liVmo}>
                            Athletic and Personal Success
                            <p>Measure success not only in terms of sports achievements, such as titles and medals but also in athletes' personal, academic, and professional development throughout their lives.</p>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={style.imgAll}>
                <img src={Basket} alt="Basketball" className={style.basketball} />
                <img src={Football} alt="Football" className={style.football} />
                <img src={Voley} alt="Volleyball" className={style.voleyball} />
            </div>
        </div>
    );
}