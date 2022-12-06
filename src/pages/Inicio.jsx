import { Butterfly, BracketsCurly, PhoneCall } from 'phosphor-react'
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
  return (
    <>
     <Header text="Meu site pessoal" image={homeImg} />
     <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        {/* <Butterfly size={150} color="#686AAC" weight="thin" /> */}
        <h2 className={styles.cardTitle}>Trajetória</h2>
        <p className={styles.cardText}> Aqui eu falo um pouco sobre mim, sobre minha trajetória, minha transição de carreira e minhas vivencias até aqui .</p>
      </div>
      <div className={styles.cardContainer}>
        <BracketsCurly size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Dev</h2>
        <p className={styles.cardText}>Aprender a programar, tem sido umas das melhores coisas que já aconteceram em minha vida, aqui você vai encontrar alguns dos projetos que criei.</p>
      </div>
      <div className={styles.cardContainer}>
        <PhoneCall size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Contato</h2>
        <p className={styles.cardText}>Entre em contato para entrevistas de emprego dev, ou para compartilharmos ideias e conhecimentos.</p>
      </div>
     </div>
    </>
  )
}