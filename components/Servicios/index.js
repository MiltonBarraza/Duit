import styles from "../Servicios/servicios.module.scss";
import ServiciosTooltip from "../ServiciosTooltip/index.js";

export default function Servicios() {
    return (
        <>
            <section className={styles.servicios}>

                <div className={styles.serviciosContainer}>

                    <h3>Servicios</h3>
                    <div className={styles.serviciosImagenes}>

                        <ServiciosTooltip />

                    </div>

                </div>

            </section >
        </>
    )
}

