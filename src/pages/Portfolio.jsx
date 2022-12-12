import { Header } from "../components/Header";
import portfolioImg from '../assets/portfolio.svg';
import portImg from '../assets/port.png';
import calculadoraImg from '../assets/calculadora.png';
import styles from '../styles/pages/portfolio.module.css';




export function Portfolio(){
    return(
        <>
        <Header text= 'Meus projetos' image ={portfolioImg} />
        <div className={styles.titleProj}>Favoritos</div>
        <div className={styles.proj}></div>

        <img className={styles.imgProj} src={portImg} />
        <h4>Portfolio</h4>
        <p className={styles.textoProj}> Projeto desenvolvido no modulo de HTML e CSS </p>
        <a
            href="https://portfolio-carolina-barbara.netlify.app/"
            className={styles.linkProj}
            target="_blank"
          >
            Ver projeto
        </a>
        <div className={styles.proj}></div>
        <img className={styles.imgProj} src={calculadoraImg} />
        <h4>Calculadora Freelancer</h4>
        <p className={styles.textoProj}> Calculadora desenvolvida no workshop do Bootcamp da Reprograma  </p>
        <a
            href="https://workshop-backend-carolina-barbara.netlify.app/"
            className={styles.linkProj}
            target="_blank"
          >
            Ver projeto
        </a>                        
        </>
    )
}