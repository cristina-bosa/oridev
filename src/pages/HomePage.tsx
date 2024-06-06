import HeaderComponent from "../components/HeaderComponent"
import DataProjects from '../mock/projects.json'
import DataExperience from '../mock/experience.json'
import DataSkills from '../mock/skills.json'
import me from '../assets/images/me.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip"
import { useNavigate } from "react-router-dom"
import { IoCopyOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


import { useState } from "react"
const HomePage = () => {
  AOS.init()
  const navigate = useNavigate()
  const projects = DataProjects
  const skills = DataSkills
  const experience = DataExperience
  const valueEmail = 'cristinabosasanchez@gmail.com'
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const handleProject = (id: number) => {
    navigate(`/project/${id}`)
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(valueEmail).then(() => {
      setVisible(true)
      setMessage('Copiado correctamente')
    }), () => {
      setMessage('Error al copiar')
    }
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <>
      <HeaderComponent />
      <main>
        <section data-aos="fade-up" className="about-me">
          <section className="about-me__content">
            <span className="about-me--suppertitle">Encantada de conocerte,</span>
            <h1 className="about-me--title">Soy Cristina. Front-end developer y UX/UI designer</h1>
            <p className="about-me--description">Con más de 4 años de experiencia en el desarrollo y diseño de aplicaciones web y móviles, enfocada en crear experiencias digitales intuitivas y atractivas.</p>
            <section className="about-me__content__copy"
              onClick={handleCopyText}>
              <div className="about-me__content__copy--info">
                <p>{valueEmail}</p>
                <IoCopyOutline                
                  onClick={handleCopyText}
                />
              </div>
              {visible && <section className="about-me__content__copy--alert" >
                <p>
                  {message}</p>
              </section>}
            </section>
            <section className="about-me__content__social">
              <a href="https://github.com/cristina-bosa"
                data-tooltip-id="my-tooltip" data-tooltip-content="Mi github" target="_blank" rel="noreferrer" className="about-me__content__social--item">
                <IoLogoGithub size={'1.2em'} />
              </a>
              <a href="https://www.linkedin.com/in/cristina-bosa/" data-tooltip-id="my-tooltip" data-tooltip-content="Mi linkedin" target="_blank" rel="noreferrer" className="about-me__content__social--item">
                <IoLogoLinkedin size={'1.2em'}/>
              </a>
            </section>
          </section>
        </section>

        <section data-aos="fade-down" className="projects" id="projects">
          <section className="projects__information">
            <h2 className="projects--title">Proyectos</h2>
            <p className="projects--description">Cada proyecto es más que una simple colección de diseños y códigos; es una historia en sí misma, donde la pasión por la excelencia y la atención al detalle se entrelazan.</p>
          </section>
          <section className="projects__container">
            {projects && projects.map((project) => {
              return (
                <section data-aos="fade-right"
                  key={project.id}
                  onClick={() => handleProject(project.id)}
                  data-aos-easing="ease-in-sine"
                  className="projects__card">
                  <section className="projects__card__header">
                    <h4 className="projects__card--title">{project.title}</h4>
                    <p className="projects__card--tag">{project.type}</p>
                  </section>
                  <section className="projects__card__footer">
                    <p className="projects__card__footer--link">
                      Ver proyecto<IoArrowForwardOutline size={'1.2em'}/> </p>
                  </section>
                </section>
              )
            })}
          </section>
        </section>
        <section data-aos="fade-down" className="skills" id="skills">
          <section className="skills__information">
            <h2 className="skills--title">Skills</h2>
          </section>
          <section className="skills__container">
            {
              skills && skills.map((skill, index) => {
                return (
                  <section key={index} data-aos="fade-down" className={skill.develop == true ? 'skills__card skills__card--develop' : 'skills__card skills__card--design'}>
                    <section className="skills__card__content">
                      <h3 className="skills__card--title">{skill.title}</h3>
                      <section className="skills__card--list">
                        {
                          skill.skill.map((item, index) => {
                            return (
                              <span key={index} className="skills__card--skills" data-tooltip-id="my-tooltip" data-tooltip-content={item.name}>
                                <img src={item.img} alt={item.name} />
                              </span>
                            )
                          })
                        }
                      </section>
                    </section>
                  </section>
                )
              })
            }
          </section>
        </section>
        <section className="experience" id="experience">
          <section className="experience__information">
            <h2 className="experience--title">Experiencia</h2>
          </section>
          <section className="experience__container">
            {experience && experience.map((experience, index) => {
              return (
                <section data-aos="fade-right"
                  key={index}
                  data-aos-easing="ease-in-sine"
                  className='experience__card'>
                  <h3 className="experience__card--year">{experience.years}</h3>
                  <h5 className="experience__card--jobtitle">{experience.title}</h5>
                  <p className="experience__card--company">{experience.company}</p>
                </section>

              )
            })
            }
          </section>
          <img src={me} data-aos="fade-down" alt="img-footer" className="img-footer" />
        </section>
      </main >
      <Tooltip id="my-tooltip" />

    </>
  )
}
export default HomePage