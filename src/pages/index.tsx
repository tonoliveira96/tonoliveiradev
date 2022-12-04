import { NextPage } from 'next';
import Image from 'next/image';
import { AboutMe, AsideMenu, ButtonVisitWebSite, HeaderContainer, MainContainer, MenuItem, ProjectCard, SectionContainer, SectionProjectsContainer, Skills, SkillsItem, SocialButton, SocialsContainer, WrapperContainer } from '../../styles/pages/app';
import { FiLinkedin, FiGithub, FiGlobe } from "react-icons/fi";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { useState } from 'react';
import { projets, skills } from '../../styles/data';
import Head from 'next/head';
import * as gtag from "../lib/gtag";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);


  const handleSocialClick = (social: string) =>{
    gtag.event({
      action: 'click',
      category: '',
      label: 'LinkedIn',
      value: ''
    })
  }

  return (
    <>
      <Head>
        <title>Ton Oliveira - Dev</title>
      </Head>
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
            <p>OLÁ, EU SOU</p>
            <h1>Everton Oliveira</h1>
            <p>Desenvolvedor com experiência em desenvolvimento Web e Mobile, fique a vontade para verificar minhas habilidades e ver meus projetos :)</p>
            <SocialsContainer>
              <button className='resume'>Currículo</button>

              <div id="social_buttons">
                <SocialButton href="https://www.linkedin.com/in/tonoliveira96/" target="_blank" rel="noopener noreferrer" onClick={()=>handleSocialClick('linkedin')}>
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
              {skills.map(skill => (
                <SkillsItem key={skill.name}>
                  <Image src={skill.icon} alt={skill.name} width={48} height={48} />
                  <p>{skill.name}</p>
                </SkillsItem>
              ))}
            </Skills>
          </SectionContainer>

          <SectionContainer id='projects'>
            <span className='top-section'>Veja meus</span>
            <h2>Projetos</h2>
            <SectionProjectsContainer>
              {projets.map(project => (
                <ProjectCard key={project.project_name}>
                  <div>
                    <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <label id="project_name">{project.project_name}</label>
                  <p>{project.description}</p>
                  <div id="visit-buttons">
                    {project.isApp ? (
                      <>
                        <ButtonVisitWebSite target="_blank" href={project.playstore_url}>
                          <FaGooglePlay />
                          Android
                        </ButtonVisitWebSite>
                        <ButtonVisitWebSite target="_blank" href={project.apple_url}>
                          <FaAppStoreIos />
                          iOS
                        </ButtonVisitWebSite>
                      </>
                    ) : (

                      <ButtonVisitWebSite target="_blank" href={project.site_url}>
                        <FiGlobe />
                        Acessar
                      </ButtonVisitWebSite>
                    )}
                  </div>

                </ProjectCard>
              ))}
            </SectionProjectsContainer>
          </SectionContainer>
        </MainContainer>
      </WrapperContainer>
    </>


  );
};

export default Home;
