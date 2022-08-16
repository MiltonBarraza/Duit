import styles from "../Servicios/servicios.module.scss"
import Image from "next/image"

export default function Servicios() {
    return (
        <section className={styles.servicios}>

            <div className={styles.serviciosContainer} /*d-flex flex-col justify-center align-center"*/>
                <h3>Servicios</h3>

                <div className={styles.serviciosImagenes} /*d-flex justify-around align-center"*/>
                    <div ngFor="let servicio of servicios;"
                className={styles.serviciosImagenContainer} /*d-flex justify-center align-center"*/>
                    <a ng-click="home.goToSection(service.goTo.page, service.goTo.section); service.action()">
                        <img src="/assets/imagenes/servicios/{{servicio.imagen}}"/>
                    </a>

                    <div ngIf="servicio.tieneTooltip" className={styles.serviciosTooltip} /*d-flex flex-col borde-sombra-gris"*/>
                    <p> { "servicio.textoTooltip" } </p>
                    <div className={styles.cambiar} /*d-flex justify-around align-center"*/>
                        <a href="{{servicio.whatsAppHRef}}"><i class="fab fa-whatsapp"></i></a>
                        <a href="{{servicio.emailHRef}}"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div >

</section >
    )
}