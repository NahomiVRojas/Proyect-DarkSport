import style from "../NavMembers/NavMembers.module.css"

export default function AllMembers(){
    return(
        <>
        <div>
            <nav className={style.navAMembers}>
                <a>BASKETBALL COACHES</a>
                <a>PSYCHOLOGISTS ON THE TEAM</a>
                <a>PHYSIOTHERAPIST</a>
            </nav>
        </div>
        </>
    )
}