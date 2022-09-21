import { NextPage } from 'next';
import Image from 'next/image';
import { AboutMe, AsideMenu, HeaderContainer, MainContainer, MenuItem, SectionContainer, Skills, SkillsItem, SocialButton, SocialsContainer, WrapperContainer } from '../../styles/pages/app';
import { FiLinkedin, FiGithub, FiHome } from "react-icons/fi";

import javascriptIcon from "../assets/skills/javascript.svg";
import htmlIcon from "../assets/skills/html.svg";
import { useState } from 'react';

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AsideMenu hidden={open}>
        <nav>
          <ul>
            <li>
              <MenuItem className='menu-item' href='#home'>
                HOME
              </MenuItem>
            </li>
            <li>
              <MenuItem className='menu-item' href='#sobre'>
                SOBRE
              </MenuItem>
            </li>
            <li>
              <MenuItem className='menu-item' href='#skills'>
                SKILLS
              </MenuItem>
            </li>
          </ul>
        </nav>

      </AsideMenu>

      <WrapperContainer>
        <HeaderContainer id="#home">
          <img src="https://github.com/tonoliveira96.png" alt='Foto de perfil' />
          <div>
            <p>ÓLA, EU SOU</p>
            <h1>Everton Oliveira</h1>
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
          <SectionContainer id="sobre">
            <span className='top-section'>algumas informações</span>
            <h2>Sobre  mim</h2>

            <AboutMe>
              <p>
                Opa! Eu sou o Everton, tenho 26 anos, sou Graduado como Tecnólogo em Análise e Desenvolvimento de Sistemas, tenho experiência com suporte técnico e treinamento de sistemas. Atualmente, foco na área de desenvolvimento de software web.
                Acredito que qualquer tipo de aprendizado nos leva ao crescimento.
              </p>
            </AboutMe>
          </SectionContainer>

          <SectionContainer id="skills">
            <span className='top-section'>Veja minhas</span>
            <h2>Skills</h2>

            <Skills>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>HTML</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>CSS</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>JavaScript</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>TypeScript</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>ReactJS</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>React Native</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>Node</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={ javascriptIcon } alt="" />
                <p>Git</p>
              </SkillsItem>
            </Skills>
          </SectionContainer>
        </MainContainer>
      </WrapperContainer>
    </>


  );
};

export default Home;
