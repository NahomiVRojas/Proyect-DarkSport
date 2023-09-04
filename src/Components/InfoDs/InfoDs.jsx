import logoDS from '../../views/images/logoPrueba.png'
import styles from '../InfoDs/infoDs.module.css'

export default function InfoDs() {
    return (
        <div className={styles.LogoAndInfo}>
            <div className={styles.Logo}>
                <img src={logoDS} alt='Logo DarkSport' className={styles.LogoHome}></img>
            </div>
            <div className={styles.Info}>
                <p className={styles.pInfo}>"Association dedicated to recruiting and developing basketball talent, forging athletes and leaders at a national and international level."</p>
            </div>
        </div>
    )
}