import style from "../ContactUs/ContactUs.module.css"
import correo from "../../views/images/correo-electronico.png"
import telefono from "../../views/images/telefono-inteligente.png"

export default function MailPhone() {
    return (
        <>
            <div className={style.divContenedor}>
                <div className={style.divTitle}>
                    <div className={style.divMailCell}>
                        <div className={style.correo}>
                            <img src={correo} className={style.imgCorreo} />
                            <div className={style.button}>
                                <p className={style.contactP}> xxxx@darksportaqp.com </p>
                            </div>
                        </div>
                        <div className={style.correo}>
                            <img src={telefono} className={style.imgCorreo} />
                            <div className={style.button}>
                                <p className={style.contactP}> (+51) 959177173 </p>
                            </div>
                        </div>
                    </div>  
                </div>

            </div>
        </>
    )
}