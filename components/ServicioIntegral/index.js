import styles from "../ServicioIntegral/servicioIntegral.module.scss";
import {ServicioIntegralImagenes} from "../ServicioIntegral/servicioIntegralComponentes";

export default function ServicioIntegral() {
    return (

        <section className={styles.servicioIntegral}>

            <h2>Somos el acompañamiento perfecto<br>
            </br> para un mercado cada vez más complejo.</h2>
            
            <div className={styles.imagesContainer}>

             <ServicioIntegralImagenes/>

            </div>

        </section>
    )
}