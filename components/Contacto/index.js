import styles from "../Contacto/contacto.module.scss";



export default function Contacto() {
    return (

        <section id="contacto" className={styles.contactoContainer}>

            <section className={styles.contacto}>

                <h3> Dejanos tu consulta</h3>

                <form className={styles.formulario}>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="name" type="text" placeholder=" " required="required"></input>
                        <label className={styles.inputPlaceholder} for="name"> Nombre*</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="lastName" type="text" placeholder=" " ></input>
                        <label className={styles.inputPlaceholder} for="lastName">Apellido</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="email" type="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"  placeholder=" " required="required"></input>
                        <label className={styles.inputPlaceholder} for="email">Email*</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="subject" type="text" placeholder=" " ></input>
                        <label className={styles.inputPlaceholder} for="subject">Teléfono</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <textarea className={styles.formControl} name="message*" placeholder=" " cols={30} rows={3} required="required" spellCheck="true"></textarea>
                        <label className={styles.textareaPlaceholder} for="message"> Mensaje*</label>
                    </div>

                    <button>Contactar</button>

                    <div></div>
                    <div></div>

                </form>
            </section>

            
        </section>
    )
}