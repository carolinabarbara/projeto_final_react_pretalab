import { Header } from "../components/Header";
import sobreImg from '../assets/sobre.svg';
import  Logo  from '../assets/perfil.png';

import styles from '../styles/pages/sobre.module.css'


export function Sobre(){
    return(
        <>  
    <Header text= 'Sobre mim' image ={sobreImg} />
    <dev className={styles.sobreContainer}>
    <img className = {styles.bioImage}  src= {Logo} />
    <div className= {styles.bioContainer}>
    <h2 className= {styles.bioTitle}>Conheça quem está por trás dos posts!</h2>
    <p className={styles.bioDescricao}> 
    Seja bem-vidos🚀! Eu me chamo Carolina Barbara, 
    paulista, nascida e criada na cidade de São Paulo, 
    tenho 31 anos sou formada em Gestão financeira e trabalho na area desde 2009.
    Estudante de programação Front-End na PretaLab, onde aprendemos muitas hard skills e aperfeiçoamos nossas soft skills.
    Meu sonho é programar o mundo! Além da programar, eu amo viajar, aprender coisas novas, e nas horas vagas faço macramê 💜.
    </p>
    </div>
    </dev>
</>
    )
}