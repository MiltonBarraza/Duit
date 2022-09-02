import styles from "../Footer/footer.module.scss";
import Image from "next/image";
import { Contactos } from "../../config"
import Link from "next/link"

export default function Footer() {
    return (

        <footer className={styles.footer}>

            <div className={styles.footerTexto}>

                <p>Sabemos que digan lo que digan, no hay mejor lugar que ese donde podés escribir tu propia historia,
                    y por eso estamos con vos para darle la bienvenida a los mejores momentos que vas a vivir.</p>

            </div>

            <div className={styles.footerLogosContainer}>

                <div className={styles.logoDuit}>

                    <Image
                        src="/images/duit_id_blanco_horizontal.png"
                        height={55}
                        width={190}
                        alt={"duit_id_blanco_horizontal.png"}
                    />

                </div>

                <div className={styles.logoByHa}>

                    <Image
                        src="/images/byha.png"
                        height={25}
                        width={55}
                        alt={"byha.png"}
                    />

                </div>

            </div>

            <div className={styles.footerTextoDatos}>

                <p>San Luis 145, 1° Oficina H</p>
                <p>Barrio Nueva Córdoba</p>
                <p>Córdoba - Argentina</p>
                <a href={`tel:+${Contactos.whatsappDuit.numero}`} >{Contactos.whatsappDuit.formateado}</a>
                
            </div>

        </footer>
    )
}