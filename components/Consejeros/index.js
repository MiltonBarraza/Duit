import { Consejeros } from "../../config"
import styles from "../ApartadoConsejeros/apartadoConsejeros.module.scss"
import Image from "next/image"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ApartadoConsejeros() {
    return (
        <section className={styles.apartadoConsejeros}>

            <div className={styles.consejerosContainer}>
                <div className={styles.consejerosTitulo} style={{ width: "100%", height: 50, position: 'relative' }}>
                    <Image
                        src='/images/consejeros.png'
                        alt="consejeros.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className={styles.consejerosDetalle}>
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

                {
                    Consejeros.map((consejero, index) => {
                        return (
                            <div key={index} className={styles.tarjetaConsejero} >
                                <Image className={styles.fotoConsejero}
                                    src={`/images/consejeros/${consejero.foto}`}
                                    alt=""
                                    width={100}
                                    height={100}
                                />

                                <p>{`${consejero.nombre}`}</p>
                                <a href={`tel:+{${consejero.telefono}}`}>{`${consejero.telefono}`}</a>

                                <div className={styles.tarjetaConsejeroIconos} >
                                    <a href={`mailto:${consejero.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                                    <a href={`https://api.whatsapp.com/send?phone={{formatearTelefono(consejero.telefono)`}><FontAwesomeIcon icon={faWhatsapp} /></a>
                                </div>
                            </div>)
                    }
                    )
                }
            </div>

        </section>
    )
}


