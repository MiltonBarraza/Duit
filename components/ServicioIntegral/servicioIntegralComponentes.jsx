import Image from "next/image";


const ServicioIntegralCirculo = [

    { src: 'servicio-integral.png' },
    { src: 'caracteristicas.png' },
    { src: "localizacion.png" },
    { src: "gastos.png" },
    { src: "informe.png" },
    { src: 'financiacion.png' },
    { src: "precio-correcto.png" },
    { src: "garantias-legales.png" },
    { src: "tramites.png" },

]

export function ServicioIntegralImagenes() {
    return (
        <>
            {ServicioIntegralCirculo.map((servicioIntegral, index) => {
                return (

                    <div>

                        <Image key={index}
                            src={`/images/servicioIntegral/${servicioIntegral.src}`}
                            alt={"algo"}
                            layout="fill"
                            objectFit="content"
                        />

                    </div>
                )
            })
            }
        </>
    )
}