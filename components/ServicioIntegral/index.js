import Image from "next/image";
import styles from "../ServicioIntegral/servicioIntegral.module.scss";
import { ServicioIntegralCirculo } from "./servicioIntegralComponentes";

export default function ServicioIntegral() {
    return (

        <section className={styles.servicioIntegral}>

            <h2>Somos el acompañamiento perfecto<br>
            </br> para un mercado cada vez más complejo.</h2>
            
            <div className={styles.imagesContainer}>
                
                <span></span>
                <span></span>
                {ServicioIntegralCirculo.map((servicioIntegral, index) => {
                    return (
                        
                        <div>

                            <Image key={index}
                                src={`/images/${servicioIntegral.src}`}
                                alt={"algo"}
                                layout="fill"
                                objectFit="content"
                            />

                        </div>
                    )
                })
                }
            </div>

        </section>
    )
}