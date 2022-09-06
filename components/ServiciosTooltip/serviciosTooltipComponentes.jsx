import { Contactos, Paginas } from '../../config';

export const ServiciosComponentes = [
    {
        tieneImagen: true,
        imagen: 'asistente-personal-blanco.png',
        tieneLink: true,
        IrA: { pagina: "", fragmento: "/asistente" },
    },
    {
        imagen: 'consejeros.png',
        IrA: { pagina: Paginas.Home, fragmento: '#consejeros' },
    },
    {
        tieneImagen: true,
        imagen: 'alquiler.png',
        IrA: { pagina: Paginas.Home, fragmento: '#buscador' },
    },
    {
        tieneImagen: true,
        imagen: 'venta.png',
        IrA: { pagina: Paginas.Home, fragmento: '#buscador' },
    },
    {
        tieneImagen: true,
        imagen: 'administracion.png',
        tieneTooltip: true,
        textoTooltip: 'Realizamos el cobro de alquileres e impuestos, y mantenimiento de tu propiedad. Damos una respuesta a los locatarios y evitamos a los propietarios las complicaciones derivadas con la administración y gestión de propiedades.',
        whatsAppHref: `https://api.whatsapp.com/send?phone=${Contactos.whatsappInfo}&text=${encodeURIComponent('Hola, quiero hacer una consulta por una administración.')}`,
        emailHref: `mailto:${Contactos.emailInfo}?Subject=${encodeURIComponent('Hola, quiero hacer una consulta por una administración.')}`
    },
    {
        tieneImagen: true,
        imagen: 'tasacion.png',
        tieneTooltip: true,
        textoTooltip: 'Nuestro asesores matriculados CPCPI valuarán tu inmueble, para que sepas cuanto vale realemente tu propiedad.',
        whatsAppHref: `https://api.whatsapp.com/send?phone=${Contactos.whatsappInfo}&text=${encodeURIComponent('Hola, quiero hacer una consulta por una administración.')}`,
        emailHref: `mailto:${Contactos.emailInfo}?Subject=${encodeURIComponent('Hola, quiero hacer una consulta por una administración.')}`
    }
]