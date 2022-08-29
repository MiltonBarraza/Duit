import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Header2/header2.module.scss";

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
                            width={180}
                            height={130}
                            className={styles.logoImagen}
                            />
                        </a>

                    </div>

                    <nav>
                        <ul id="responsive">
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

                    </nav>

                    <div>
                        <a></a>
                        <a></a>
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