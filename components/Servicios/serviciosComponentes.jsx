import { Contactos, Paginas } from "../../config"
const contacto = Contactos;

export const handleClick = () => {
    console.log('Buen viernes');
}


    export const AsistentePersonal =
    {
        imagen: 'asistente-personal-blanco.png',
        // IrA: {pagina: Paginas.AsistentePersonal},
        IrA: { pagina: "/asistente" }
    }

    export const servicios = [

        {
            imagen: 'consejeros.png',
            IrA: { pagina: Paginas.Home, fragmento: "#consejeros" },
        },
        {
            imagen: 'alquiler.png',
            IrA: { pagina: Paginas.Home, fragmento: "#buscador" },
        },
        {
            imagen: 'venta.png',
            IrA: { pagina: Paginas.Home, fragmento: "#buscador" },
        },
        {
            imagen: 'administracion.png',
            tieneTooltip: true,
            textoTooltip: 'Realizamos el cobro de alquileres e impuestos, y mantenimiento de tu propiedad. Damos una respuesta a los locatarios y evitamos a los propietarios las complicaciones derivadas con la administración y gestión de propiedades.',
            // whatsAppHRef: `https://api.whatsapp.com/send?phone=${Contactos.whatsappInfo}&text=${window.encodeURIComponent('Hola, quiero hacer una consulta por una administración.')}`,
            // emailHRef: `mailto:${this.contacto.emailInfo}?Subject=${window.encodeURIComponent('Hola, quiero hacer una consulta por una administración.')}`,
            IrA: {},
        },
        {
            imagen: 'tasacion.png',
            tieneTooltip: true,
            textoTooltip: 'Nuestro asesores matriculados CPCPI valuarán tu inmueble, para que sepas cuanto vale realemente tu propiedad.',
            // whatsAppHRef: `https://api.whatsapp.com/send?phone=${this.contacto.whatsappInfo}&text=${window.encodeURIComponent('Hola, quiero hacer una consulta por una tasasión.')}`,
            // emailHRef: `mailto:${this.contacto.emailInfo}?Subject=${window.encodeURIComponent('Hola, quiero hacer una consulta por una tasasión.')}`,
            IrA: { },
        },
    ];