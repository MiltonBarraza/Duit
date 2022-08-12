import styles from "../TarjetaContacto/tarjetaContacto.module.scss";
import Image from "next/image"
import { Contactos } from "../../config"

export default function TarjetaContacto() {
    return (

        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/duit-rojo-horizontal.png"
                    alt="duit-rojo-horizontal.png"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            
            <div className={styles.tarjetaContactoTexto}>
                <p>San Luis 145, 1° Oficina H</p>
                <p>Barrio Nueva Córdoba</p>
                <p>Córdoba - Argentina</p>
                <a href={`tel:+${Contactos.whatsappDuit.numero}`}>{Contactos.whatsappDuit.formateado}</a>
            </div>
        </section>

    )
}