import Image from "next/dist/client/image";
import styles from "../Beneficios/beneficios.module.scss";


export default function Beneficios() {
    return (
        <section className={styles.beneficios}>

            <Image
                src="/images/planos.png"
                alt="planos.png"
                layout="fill"
                objectFit="cover"

            />

            <div className={styles.copy}>

                <h2>Beneficios de nuestro<br></br>servicio personalizado.</h2>

                <ul>

                    <li>
                        <h1>#1</h1>
                        <p>Reducimos el 70% del tiempo.</p>
                    </li>
                    <li>
                        <h1>#2</h1>
                        <p>Encontramos la propiedad ideal.</p>
                    </li>
                    <li>
                        <h1>#3</h1>
                        <p>Facilitamos los asuntos administrativos y jurídicos.</p>
                    </li>
                    <li>
                        <h1>#4</h1>
                        <p>Cerramos los mejores acuerdos para que ahorres.</p>
                    </li>
                    <li>
                        <h1>#5</h1>
                        <p>Equipo de profesionales dedicados exlusivamente.</p>
                    </li>
                    <li>
                        <h1>#6</h1>
                        <p>Te conocemos y entendemos lo que necesitás.</p>
                    </li>

                </ul>

            </div>

        </section>
    )
}