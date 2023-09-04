import logoDS from '../../views/images/logoPrueba.png'
import styles from '../Header/Header.module.css';

export default function HeaderLogoSlogan() {
    return (
        <>
            <header>
                <img className={styles.logoDark} src={logoDS} alt='Logo DarkSport' />
                <span>Forging Champions, Shaping Leaders</span>
            </header>
        </>
    )
}