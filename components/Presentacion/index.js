import styles from "../Presentacion/presentacion.module.scss";
import Image from "next/image";

export default function Presentacion() {
    return (
        <section className={styles.presentacion}>

            <div className={styles.fondo}>
                <Image
                    src={"/images/familia.png"}
                    alt={"familia.png"}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className={styles.copia}>
                <h1>Presentamos</h1>
                <div className={styles.logoPrincipal}>
                    <Image
                        src={"/images/asistente-personal-blanco.png"}
                        alt={"asistente-personal-blanco.png"}
                        width={340}
                        height={200}
                    />
                </div>
                <h2>El nuevo servicio de Duit para ayudar a las personas a tomar una de las decisiones más importantes de su vida.</h2>
            </div>

            <div className={styles.comprar}>
                <Image
                    src={"/images/comprar.png"}
                    alt={"comprar.png"}
                    width={240}
                    height={250}
                />
            </div>

        </section>
    )
}