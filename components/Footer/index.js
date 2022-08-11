import styles from "../Footer/footer.module.scss";
import Image from "next/image";
import { Contactos } from "../../config"


export default function Footer() {
    return (

        <footer className={styles.footer}>

            <div className={styles.copy}>
                <p>Sabemos que digan lo que digan, no hay mejor lugar que ese donde podés escribir tu propia historia,
                    y por eso estamos con vos para darle la bienvenida a los mejores momentos que vas a vivir.</p>
            </div>

            <div className={styles.logosContainer}>
                <div style={{ width: "50%", height: "auto", }}>
                    <Image
                        className={styles.logo}
                        src="/images/duit_id_blanco_horizontal.png"
                        height={54.99}
                        width={192.2}
                        alt={"duit_id_blanco_horizontal.png"}
                    />
                </div>
                <div style={{ width: "50%", height: "auto", }}>
                    <Image
                        className={styles.logo}
                        src="/images/byha.png"
                        height={25}
                        width={55}
                        alt={"byha.png"}
                    />
                </div>
            </div>

            <div className={styles.contactoContainer}>
                <p>San Luis 145, 1° Oficina H</p>
                <p>Barrio Nueva Córdoba</p>
                <p>Córdoba - Argentina</p>
                <a href={`tel:+${Contactos.whatsappDuit.numero}`}>{Contactos.whatsappDuit.formateado}</a>
            </div>

        </footer>

    )
}

