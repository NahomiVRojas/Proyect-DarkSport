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
                        To be the leading agency for recruiting outstanding athletes in basketball, volleyball, and football, focusing on identifying and nurturing talent from an early age, starting from 6 years old and up. Our vision is to be recognized nationally and internationally for our ability to discover and develop young prospects in these sports, providing them with exceptional opportunities to reach their full potential in sports and in life.
                    </p>
                </section>
                <section className={style.divMission}>
                    <h1 className={style.h1Vmo}>MISSION</h1>
                    <p className={style.pvmo}>
                        In our mission to recruit outstanding athletes in basketball, volleyball, and football from the age of 6 and onwards, we are committed to providing a comprehensive development environment that fosters sports excellence, personal growth, and education. Our goal is to offer high-quality training programs, expert guidance, and competitive opportunities that enable young athletes to develop their technical, tactical, and mental skills while instilling values of teamwork, discipline, and perseverance. Through our holistic, individual development-centered approach, we aim to forge leaders not only in these sports but also in society at large.
                    </p>
                </section>
                <section className={style.divObjectives}>
                    <h1 className={style.h1Vmo}>OBJECTIVES</h1>
                    <ul>
                        <li className={style.liVmo}>
                            <h2>Talent Identification</h2>
                            <p>Identify and assess young talents in basketball, volleyball, and football through early detection programs in schools, clubs, and sports events.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>Comprehensive Development</h2>
                            <p>Design and provide training programs that address technical, tactical, and psychological aspects of basketball, volleyball, and football, focusing on the holistic development of athletes.

                            </p>
                        </li>
                        <li className={style.liVmo}>
                           <h2>Mentorship and Guidance</h2> 
                            <p>Offer individualized guidance and counseling to athletes in basketball, volleyball, and football, helping them set goals, plan their development, and balance their sports commitments with their education and personal life.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>High-Level Competition</h2>
                            <p>Facilitate athletes' participation in high-level competitions and tournaments in basketball, volleyball, and football, both nationally and internationally, to provide valuable experiences and growth opportunities.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>Values Formation</h2>
                            <p>Promote values such as teamwork, work ethics, responsibility, and respect in athletes in basketball, volleyball, and football, emphasizing their development as leaders on and off the court.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>Collaboration with Educational Institutions</h2>
                            <p>Establish strategic partnerships with schools and universities to ensure athletes in basketball, volleyball, and football receive a solid education and have options to continue their academic development.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>Research and Continuous Improvement</h2>
                            <p>Conduct ongoing research and analysis to enhance our training programs and methodologies in basketball, volleyball, and football, ensuring alignment with the latest trends and advancements in these sports.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>International Recognition</h2>
                            <p>Work towards the goal of being recognized as a leading recruitment agency for basketball, volleyball, and football internationally, establishing a presence in different regions and participating in renowned sports events.</p>
                        </li>
                        <li className={style.liVmo}>
                            <h2>Athletic and Personal Success</h2>
                            <p>Measure success not only in terms of sports achievements, such as titles and medals, but also in athletes' personal, academic, and professional development throughout their lives in basketball, volleyball, and football.</p>
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