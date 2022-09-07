import Image from "next/image";
import styles from "../Asistentes/asistentes.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Consejeros } from "../../config";

export function AsistentesImagenes() {
    return (
        <>
            {Consejeros.map((asistente, index) => {
                if (asistente.posicion === 'Consejera' || asistente.posicion === 'Consejero' || asistente.posicion === 'Asesor' ) {
                    return <div className={styles.tarjetaAsistentes} key={index}>

                        <Image
                            src={`/images/asistentes/${asistente.foto}`}
                            alt={`${asistente.foto}`}
                            width={100}
                            height={100}
                        />
                        
                        <p>{`${asistente.nombre}`}</p>
                        <a href={`tel:+{${asistente.telefono}}`}>{`${asistente.telefono}`}</a>

                        <div className={styles.tarjetaAsistentesIconos}>

                            <a href={`mailto:${asistente.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                            <a href={`https://api.whatsapp.com/send?phone=${asistente.telefonoFormateado}`}><FontAwesomeIcon icon={faWhatsapp} /></a>

                        </div>

                    </div>
                }
            }
            )
            }</>
    )
}