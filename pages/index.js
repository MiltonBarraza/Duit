import OwnImage from "../components/Image/image"
import Image from "next/image"
import Head from 'next/head'
import styles from '../components/Image/image.module.scss';

export default function Main() {
  return (
    <>
      <h1>Hola from Home</h1>
      <h1 id="duit360">Duit 360</h1>
      <h1 id="servicios">Servicios</h1>
      <h1 id="consejeros">Consejeros</h1>
      <h1 id="contacto">Contacto</h1>
      <div>
      <OwnImage src="/images/duit_id_blanco_horizontal.png" alt="Vercel logo" layout="fill" maxWidth="500px" />
    </div>
    </>
  )
}
