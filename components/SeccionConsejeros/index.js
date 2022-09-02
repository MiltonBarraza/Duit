import Image from "next/image";
import styles from "../SeccionConsejeros/seccionConsejeros.module.scss";
import { TarjetasConsejeros } from "../TarjetasConsejeros";


export default function SeccionConsejeros() {
    return (
        
        <section className={styles.seccionConsejeros}>

            <div className={styles.seccionConsejerosContainer}>

                <div className={styles.seccionConsejerosTitulo} >

                    <Image
                        src='/images/consejeros.png'
                        alt="consejeros.png"
                        width={150}
                        height={50}
                    />

                </div>

                <div className={styles.seccionConsejerosDetalle}>

                    <p>
                        En Duit contamos con más de 10 años de experiencia en el mercado inmobiliario, somos personas con un
                        mismo sueño, con una misma forma de ver la vida, de superarnos, de dar lo mejor.
                        <br /><br />
                        Comprendemos la importancia y trascendencia que tiene en la vida de las personas, la compra o alquiler
                        de una vivienda, local comercial o cualquier otro tipo de transacción inmobiliaria.
                        <br /><br />
                        Generamos vínculos a largo plazo, y trabajamos enfocados en lograr que el beneficio sea para todos.
                        <br /><br />
                        Se trata de identidad, de valores, de una forma de hacer las cosas, y aconsejar, es la única que nos
                        representa.
                    </p>
                    
                </div>

                <TarjetasConsejeros/>

            </div>

        </section>
    )
}