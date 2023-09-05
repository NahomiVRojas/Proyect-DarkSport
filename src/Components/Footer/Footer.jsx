import style from "../Footer/Footer.module.css"
import GitHub from "../../views/images/github.png"

export default function Footer() {
    return (
        <footer>
            <span className={style.spanDS}>DarkSport®</span>
            <div className={style.divGithub}>
                <img src={GitHub} className={style.imgGithub}></img>
                <span className={style.nameGithub}>
                    <a className={style.aGithub} href="https://github.com/NahomiVRojas" target="_blank" rel="noopener noreferrer">
                        NahomiVRojas
                    </a>
                </span>
            </div>
        </footer>
    )
}