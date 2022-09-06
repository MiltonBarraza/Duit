import Link from "next/link";
import Image from "next/image";
import styles from "../Servicios/servicios.module.scss";
import { Tooltip } from '@nextui-org/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ServiciosComponentes } from "./serviciosTooltipComponentes";

export default function ServiciosTooltip() {
    return (
        <>

            {ServiciosComponentes.map((servicio, index) => {

                if (servicio.tieneImagen === true && servicio.tieneTooltip === true) 
                
                {
                    return <Tooltip
                        className={styles.serviciosImagenContainer}
                        placement="bottom"
                        hideArrow
                        content={
                            <>
                                <p>{`${servicio.textoTooltip}`}</p>
                                <div id="icon" className={styles.servicioTooltip}>

                                    <a id="servicioWsp" href={`${servicio.whatsAppHref}`}><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    <a id="servicioMail" href={`${servicio.emailHref}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                              
                                </div>
                            </>
                        }
                    >
                        <a>
                            <Image
                                src={`/images/servicios/${servicio.imagen}`}
                                alt={`${servicio.imagen}`}
                                width={135}
                                height={135}
                            />
                        </a>

                    </Tooltip>

                } if (servicio.tieneImagen === true && servicio.tieneLink === true) {
                    return (

                        <div className={styles.serviciosImagenContainer} key={index}>

                            <Link href={`${servicio.IrA.fragmento}`}><a>
                                <Image
                                    src={`/images/servicios/${servicio.imagen}`}
                                    alt={`${servicio.imagen}`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a></Link>

                        </div>

                    )
                } else
                    return (

                        <div className={styles.serviciosImagenContainer} key={index}>

                            <a href={`${servicio.IrA.fragmento}`}>
                                <Image
                                    src={`/images/servicios/${servicio.imagen}`}
                                    alt={`${servicio.imagen}`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>

                        </div>

                    )
            }
            )
            }
        </>
    )
}
