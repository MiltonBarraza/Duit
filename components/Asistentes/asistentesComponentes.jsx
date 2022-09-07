import Image from "next/image";
import styles from "../Asistentes/asistentes.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Asistentes = [
    {
        nombre: 'Agustín Aznarez',
        telefono: '351 3102556',
        telefonoFormateado: '+54 9 351 3102556',
        email: 'agustin@duitpropiedades.com.ar',
        foto: 'agustin-aznarez-profile.jpg',
    },
    {
        nombre: 'Daniel Ganim',
        telefono: '351 5647780',
        telefonoFormateado: '+54 9 351 5647780',
        email: 'danielganim@duitpropiedades.com.ar',
        foto: 'daniel-ganim-profile.jpg',
    },
    {
        nombre: 'Fernando Gavier',
        telefono: '351 5145491',
        telefonoFormateado: '+54 9 351 5145491',
        email: 'fgavier@duitpropiedades.com.ar',
        foto: 'fernando-gavier-profile.jpg',
    },
    {
        nombre: 'Severo Sosa',
        telefono: '351 5648467',
        telefonoFormateado: '+54 9 351 5648467',
        email: 'severo@duitpropiedades.com.ar',
        foto: 'severo-sosa-profile.jpg',
    },
    {
        nombre: 'Carolina Valarolo',
        telefono: '351 5513711',
        telefonoFormateado: '+54 9 351 5513711',
        email: 'carolina@duitpropiedades.com.ar',
        foto: 'carolina-valarolo-1-profile.jpg',
    },
    {
        nombre: 'Santiago Paulus',
        telefono: '351 5908204', 
        telefonoFormateado: '+54 9 351 5908204',
        email: 'santiago@duitpropiedades.com.ar',
        foto: 'santiago-pablu-profile.jpg',
    }
];

export function AsistentesImagenes() {
    return (

        Asistentes.map((asistente, index) => {

            return (

                <div className={styles.tarjetaAsistentes} key={index}>

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
                        <a href={`https://wa.me/${asistente.telefonoFormateado}`}><FontAwesomeIcon icon={faWhatsapp} /></a>

                    </div>

                </div>
            )
        }
        )
    )
}