import styles from "../TarjetaContacto/tarjetaContacto.module.scss";
import Image from "next/image"
import { Contactos } from "../../config"

export default function TarjetaContacto() {
    return (

        <section className={styles.container}>
            <div style={{ width: '65%', height: '42%', position: 'relative' }}>
                <Image
                    src="/images/duit-rojo-horizontal.png"
                    layout="fill"
                    objectFit="contain"
                    alt="duit-rojo-horizontal.png"
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