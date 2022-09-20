import { NextPage } from 'next';
import { HeaderContainer, MainContainer, SectionContainer, SocialButton, SocialsContainer } from '../../styles/pages/app';
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <HeaderContainer>
        <img src="https://github.com/tonoliveira96.png" alt='Foto de perfil' />
        <div>
          <p>ÓLA, EU SOU</p>
          <h1>Ton Oliveira</h1>
          <p>Dado o fluxo de dados atual, a compilação final do programa causou o bug dos argumentos que definem um schema dinâmico</p>
          <SocialsContainer>
            <button className='resume'>Currículo</button>

            <div>
              <SocialButton href="https://www.linkedin.com/in/tonoliveira96/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={ 24 } />
              </SocialButton>
              <SocialButton href="https://github.com/tonoliveira96" target="_blank" rel="noopener noreferrer">
                <FiGithub size={ 24 } />
              </SocialButton>
            </div>
          </SocialsContainer>
        </div>
      </HeaderContainer>

      <MainContainer>
        <SectionContainer>
          <span>algumas informações</span>
          <h2>Sobre  mim</h2>

          <article>
            <p>
              Opa! Eu sou o Everton, tenho 26 anos, sou Graduado como Tecnólogo em Análise e Desenvolvimento de Sistemas, tenho experiência com suporte técnico e treinamento de sistemas. Atualmente, foco na área de desenvolvimento de software web.
              Acredito que qualquer tipo de aprendizado nos leva ao crescimento.
            </p>
          </article>
        </SectionContainer>
      </MainContainer>
    </>


  );
};

export default Home;
