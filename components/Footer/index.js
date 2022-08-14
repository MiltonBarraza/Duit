import styles from "../Footer/footer.module.scss";
import Image from "next/image";
import { Contactos } from "../../config"
import OwnImage from "../Image/image"
import Head from "next/head";

export default function Footer() {
    return (

        <footer className={styles.footer}>

            <div className={styles.copy}>
                <p>Sabemos que digan lo que digan, no hay mejor lugar que ese donde podés escribir tu propia historia,
                    y por eso estamos con vos para darle la bienvenida a los mejores momentos que vas a vivir.</p>
            </div>

            <div className={styles.footerLogosContainer}>

                <div className={styles.logoDuit}>

                    <OwnImage
                        src="/images/duit_id_blanco_horizontal.png"
                        alt="duit_id_blanco_horizontal.png"
                        layout="fill"
                        maxWidth={"195px"}
                                              
                       

                    />
                </div>
                <div className={styles}>
                    <OwnImage src="/images/byha.png" alt="byha.png" layout="fill" maxWidth={"55px"}/>
                </div>
            </div>

            <div className={styles.footerContactoContainer}>
                <p>San Luis 145, 1° Oficina H</p>
                <p>Barrio Nueva Córdoba</p>
                <p>Córdoba - Argentina</p>
                <a href={`tel:+${Contactos.whatsappDuit.numero}`}>{Contactos.whatsappDuit.formateado}</a>
            </div>

        </footer>

    )
}

