import Image from "next/image";
import { Consejeros } from "../../config";
import styles from "../SeccionConsejeros/seccionConsejeros.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function TarjetasConsejeros() {
    return (
        Consejeros.map((consejero, index) => {
            return (
    
                <div key={index} className={styles.tarjetaConsejero} >

                    <Image className={styles.fotoConsejero}
                        src={`/images/consejeros/${consejero.foto}`}
                        alt={`${consejero.foto}`}
                        width={100}
                        height={100}
                    />

                    <p>{`${consejero.nombre}`}</p>
                    <a href={`tel:+{${consejero.telefono}}`}>{`${consejero.telefono}`}</a>

                    <div className={styles.tarjetaConsejerosIconos}>
                        
                        <a href={`mailto:${consejero.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href={`https://api.whatsapp.com/send?phone=${consejero.telefonoFormateado}`}><FontAwesomeIcon icon={faWhatsapp} /></a>
                        
                    </div>
    
                </div>
            )
        }
        )
    )
}
