import Link from "next/link";
import Image from "next/image";
import styles from "../servicios.module.scss";
import { Tooltip } from '@nextui-org/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ServicioComponentes } from "../../../config";

export default function Servicio() {
    return (
        <>

            {ServicioComponentes.map((servicio, index) => {

                if (servicio.imagen && servicio.textoTooltip ) 
                
                {
                    return <Tooltip
                        className={styles.serviciosImagenContainer}
                        placement="bottom"
                        hideArrow
                        content={
                            <>
                                <p>{`${servicio.textoTooltip}`}</p>
                                <div className="iconoTarjetaConsejeros">

                                    <a className="verdeWhatsapp" href={`${servicio.whatsAppHref}`}><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    <a className="servicioMail" href={`${servicio.emailHref}`}><FontAwesomeIcon icon={faEnvelope} /></a>
                              
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

                } if (servicio.imagen && servicio.tieneLink) {
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