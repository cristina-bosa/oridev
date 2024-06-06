import HeaderComponent from "../components/HeaderComponent";
import { useParams } from "react-router-dom"
import DataProjects from '../mock/projects.json'
import { Tooltip } from "react-tooltip";
import { IoLink } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const ProjectIndividual = () => {
  const { id } = useParams();

  const project = DataProjects.find(project => project.id === +id)
  const handleBack = () => {
    window.history.back();
  }
  return (
    <>
      <HeaderComponent />
      <main className="project">
        <section className="project__header">
          <button className="btn btn--primary" onClick={handleBack}><IoArrowBack />
            Atrás</button>
        </section>
        <section className="project__content">
          <section className="project__information">
            <h1 className="project--title">{project?.title}</h1>
            <p className="project--description">{project?.summary}</p>
            <section className="project__url">
              {
                project?.urls.map((url) => {
                  return (
                    <a className="project--url" href={url.url} target="_blank" rel="noreferrer"><IoLink />
                      {url.name}</a>
                  )
                })
              }
            </section>
          </section>
          <section className="project__tech">
            <section className="project__tech--software">
              {project?.software.length === 0 ? "" : <h2>Software</h2>}
              <div className="project__tech__list">
                {
                  project?.software.map((software) => {
                    return (
                      <>
                        <span className="project__tech--item" data-tooltip-id="my-tooltip" data-tooltip-content={software.name}>
                          <img src={software.img} alt={software.name} />
                        </span>
                        <Tooltip id="my-tooltip" />
                      </>
                    )
                  })
                }
              </div>
            </section>

            <section className="project__tech--software">

              {project?.tech.length === 0 ? "" : <h2>Tecnologías</h2>}
              <div className="project__tech__list">
                {
                  project?.tech.map((tech) => {
                    return (
                      <>
                        <span className="project__tech--item" data-tooltip-id="my-tooltip" data-tooltip-content={tech.name}>
                          <img src={tech.img} alt={tech.name} />
                        </span>
                        <Tooltip id="my-tooltip" />
                      </>
                    )
                  })
                }
              </div>
            </section>
          </section>
        </section>
        <section className="project__additionalcontent">
          <section className="project__additionalcontent--left">
            <img className="project-img" alt={`${project?.title}`} src={project?.gallery[0]} />
          </section>
          <section className="project__additionalcontent--right">

            {project?.challenge === null ? ""
              :
              (<div className="project__additionalcontent--right--card">
                <h2>Reto</h2>
                <p> {project?.challenge}</p></div>)}


          </section>
        </section>
      </main >
    </>
  )
}
export default ProjectIndividual