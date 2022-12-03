import { NextPage } from 'next';
import Image from 'next/image';
import { AboutMe, AsideMenu, ButtonVisitWebSite, HeaderContainer, MainContainer, MenuItem, ProjectCard, SectionContainer, SectionProjectsContainer, Skills, SkillsItem, SocialButton, SocialsContainer, WrapperContainer } from '../../styles/pages/app';
import { FiLinkedin, FiGithub, FiHome, FiGlobe } from "react-icons/fi";

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
            <li>
              <MenuItem className='menu-item' href='#projects'>
                PROJETOS
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
                  <FiLinkedin size={24} />
                </SocialButton>
                <SocialButton href="https://github.com/tonoliveira96" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={24} />
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
                <Image src={javascriptIcon} alt="" />
                <p>HTML</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>CSS</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>JavaScript</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>TypeScript</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>ReactJS</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>React Native</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>Node</p>
              </SkillsItem>
              <SkillsItem>
                <Image src={javascriptIcon} alt="" />
                <p>Git</p>
              </SkillsItem>
            </Skills>
          </SectionContainer>

          <SectionContainer id='projects'>
            <span className='top-section'>Veja meus</span>
            <h2>Projetos</h2>
            <SectionProjectsContainer>
              <ProjectCard>
                <div>
                  <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <span id="project_name">AnoteChuva</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eos omnis aliquid assumenda optio earum voluptate voluptas illum quas in quasi fuga mollitia numquam, placeat ratione deserunt libero dignissimos quia.
                </p>
                <ButtonVisitWebSite>
                  <FiGlobe />
                  Acessar
                  </ButtonVisitWebSite>
              </ProjectCard>
              <ProjectCard>
                <div>
                  <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <span id="project_name">AnoteChuva</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eos omnis aliquid assumenda optio earum voluptate voluptas illum quas in quasi fuga mollitia numquam, placeat ratione deserunt libero dignissimos quia.
                </p>
                <ButtonVisitWebSite>
      
                  Acessar</ButtonVisitWebSite>
              </ProjectCard>
              <ProjectCard>
                <div>
                  <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <span id="project_name">AnoteChuva</span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, eos omnis aliquid assumenda optio earum voluptate voluptas illum quas in quasi fuga mollitia numquam, placeat ratione deserunt libero dignissimos quia.
                </p>
                <ButtonVisitWebSite>Acessar</ButtonVisitWebSite>
              </ProjectCard>
            </SectionProjectsContainer>
          </SectionContainer>
        </MainContainer>
      </WrapperContainer>
    </>


  );
};

export default Home;
