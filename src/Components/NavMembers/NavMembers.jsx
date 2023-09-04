import style from "../NavMembers/NavMembers.module.css"
import { useState } from "react"
import MembersLi from "../MembersLi/MembersLi";

export default function AllMembers() {

    const [selectedTab, setSelectedTab] = useState('');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <>
            <div>
                <nav className={style.navAMembers}>
                    <a onClick={() => handleTabClick('BASKETBALL COACHES')}>BASKETBALL COACHES</a>
                    <a onClick={() => handleTabClick('PSYCHOLOGISTS ON THE TEAM')}>PSYCHOLOGISTS ON THE TEAM</a>
                    <a onClick={() => handleTabClick('PHYSIOTHERAPIST')}>PHYSIOTHERAPIST</a>
                </nav>
            </div>
            <MembersLi selectedTab={selectedTab} />
        </>
    )
}