import styles from "../AsPerContacto/asPerContacto.module.scss";



export default function AsPerContacto() {
    return (

        

            <section id="asPerContacto" className={styles.contacto} autocomplete="on">

                <h3> Dejanos tus datos y nos comunicamos con vos.</h3>

                <form className={styles.formulario}>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="name" type="text" placeholder=" " required="required"></input>
                        <label className={styles.inputPlaceholder} for="name"> Nombre*</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="lastName" type="text" placeholder=" " required="required"></input>
                        <label className={styles.inputPlaceholder} for="lastName">Apellido*</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="email" type="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"  placeholder=" " required="required"></input>
                        <label className={styles.inputPlaceholder} for="email">Email*</label>
                    </div>
                    <div className={styles.contactFormGroup}>
                        <input className={styles.formControl} name="subject" type="text" placeholder=" " required="required"></input>
                        <label className={styles.inputPlaceholder} for="subject">Teléfono*</label>
                    </div>
                    
                    <button>Contactar</button>

                    <div></div>
                    <div></div>

                </form>
            </section>

            
        
    )
}