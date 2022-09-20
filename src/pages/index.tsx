import { NextPage } from 'next';
import { HeaderContainer, SocialsContainer } from '../../styles/pages/app';


const Home: NextPage = () => {
  return (
    <HeaderContainer>
      <img src="https://github.com/tonoliveira96.png" alt='Foto de perfil'/>
      <div>
        <p>Olá, eu sou</p>
        <h1>Ton Oliveira</h1>
        <p>Dado o fluxo de dados atual, a compilação final do programa causou o bug dos argumentos que definem um schema dinâmico</p>
        <SocialsContainer>
          <button>Currículo</button>

          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </SocialsContainer>
      </div>
    </HeaderContainer>
  )
}

export default Home
