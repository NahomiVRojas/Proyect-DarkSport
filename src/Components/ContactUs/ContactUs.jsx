import style from "../ContactUs/ContactUs.module.css"

export default function MailPhone() {
    return (
        <>
            <div className={style.divContenedor}>
                <div className={style.divTitle}>
                    <span className={style.Title}> CONTACT US </span>
                    <div className={style.divMailCell}>
                        <div className={style.button}>
                            <p className={style.contactP}> xxxx@darksportaqp.com </p>
                        </div>
                        <div className={style.button}>
                            <p className={style.contactP}> (+51) 959177173 </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}