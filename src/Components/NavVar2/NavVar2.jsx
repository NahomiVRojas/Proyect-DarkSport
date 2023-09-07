import styles from '../NavVar2/NavVar2.module.css'
import { NavLink } from 'react-router-dom'

export default function NavVar(){

    return(
        <nav>
            <NavLink  exact="true" to="/" className={styles.a}>HOME</NavLink>
            <NavLink  exact="true" to="/aboutUs" className={styles.a}>ABOUT US</NavLink>
            <NavLink  exact="true" to="/members" className={styles.a}>MEMBERS</NavLink>
            <NavLink  exact="true"to="/contactUs" className={styles.a}>CONTACT US</NavLink>
        </nav>
    )
}