import { Outlet } from "react-router-dom";
import HeaderLogoSlogan from '../Components/Header/Header'
import NavVar from '../Components/NavVar2/NavVar2'
import Footer from "../Components/Footer/Footer";
import VideoBack from "../views/assets/background.mp4"
import '../views/App.css'

export default function App() {
    return (
        <>
            <HeaderLogoSlogan />
            <NavVar />
            <main>
                <video src={VideoBack} className="VideoBackGround" autoPlay loop muted></video>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};