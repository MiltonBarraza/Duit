import Image from "next/image";
import styles from "../Asistentes/asistentes.module.scss";
import { AsistentesImagenes } from "../Asistentes/asistentesComponentes";

export default function Asistentes() {
    return (
        <section className={styles.asistentes}>

            <div className={styles.tituloContainer}>

                <h3>Elegí a tu</h3>

                <div className={styles.containerImg}>
                    
                    <Image
                        src={"/images/asistente-personal-color.png"}
                        alt={"asistente-personal-color.png"}
                        layout="fill"
                        objectFit="cover"
                    />

                </div>

            </div>

            <div className={styles.listadoAsistentes} >

                <AsistentesImagenes/>
                
            </div>
        </section>
    )
}