import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Header2/header2.module.scss";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Header2() {
    return (

        <header id="headerContainer">
            <section id="mobile-header">

                <div>

                </div>


                <div>

                </div>

            </section>

            <section id="header">
                <div id="mainHeader" className={styles.desktopHeaderContainer}>
                    <div id="logo" className={styles.logo}>
                        <a>
                            <Image 
                            src="/images/duit_id_blanco.png"
                            alt="duit_id_blanco.png"
                            width={130}
                            height={80}
                            className={styles.logoImagen}
                            />
                        </a>

                    </div>

                    <nav id="navigation" className={styles.navigation}>
                        <ul id="responsive">
                            <li><a> "Home" </a></li>
                            <li><a> "Asistente Personal" </a></li>
                            <li><a> "Alquiler" </a></li>
                            <li><a> "Venta" </a></li>
                            <li><a> "Emprendimientos" </a></li>
                            <li><a> "Duit 360°" </a></li>
                            <li><a> "Servicios" </a></li>
                            <li><a> "Consejeria" </a></li>
                            <li><a> "Contactos" </a></li>
                        </ul>

                    </nav>

                    <div className={styles.headerSocial}>
                        <a href="https://www.facebook.com/duitpropiedades" target="_blank"><FontAwesomeIcon icon={faFacebook}  /> </a>
                        <a href="https://www.instagram.com/duitpropiedades/" target="_blank"><FontAwesomeIcon icon={faInstagram} className={styles.iconos} /></a>
                    </div>

                </div>

                <div id="sticky-header">

                    <div id="logo">
                        <a></a>
                    </div>

                    <nav id="navigation">
                    </nav>
                    <ul>

                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>


                    <div>

                    </div>
                </div>

            </section>
        </header>
    )
}