import HeaderComponent from "../components/HeaderComponent"
import me from "../assets/images/me.png"
import Data from '../mock/projects.json'

const HomePage = () => {
  const projects = Data;

  return (
    <>
      <HeaderComponent />
      <main className="">
        <section className="about-me">
          <section className="about-me__image">
            <img src={me} alt="Brand design" />
            <svg className="about-me__image--svg" width="500" height="358" viewBox="0 0 500 358" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M148.527 42.2078C159.858 30.9247 171.206 20.4627 184.154 11.0072C187.381 8.65089 196.303 1.40449 194.513 4.96842C181.932 30.0256 165.236 54.0758 150.801 77.9375C98.5158 164.37 48.8638 253.026 6.77937 344.904C5.76032 347.128 4 349.252 4 351.697C4 357.775 9.62656 340.907 12.5908 335.594C28.6403 306.825 47.4944 281.016 69.4416 256.334C126.417 192.259 196.124 142.353 255.912 81.4601C286.599 50.2071 192.51 142.065 163.435 174.81C147.181 193.116 131.537 211.864 116.186 230.921C112.867 235.04 102.671 246.218 107.595 244.257C122.198 238.44 137.746 225.395 150.549 217.333C190.551 192.146 231.193 168.011 271.83 143.861C281.67 138.014 422.816 44.6256 427.475 48.7498C429.708 50.7262 423.673 53.3423 421.664 55.5435C409.799 68.5404 397.544 81.1787 385.532 94.041C358.343 123.155 331.083 152.235 304.172 181.604C296.398 190.088 194.3 298.408 209.168 311.438C219.621 320.599 376.361 190.022 390.585 179.591C425.096 154.286 520.442 68.3923 490.138 98.5701C464.453 124.148 441.254 152.244 414.842 177.075C384.364 205.728 351.05 231.088 320.848 260.108C313.044 267.608 311.641 269.764 303.162 264.134" stroke="#23CE6B" stroke-width="8" stroke-linecap="round" />
            </svg>

          </section>
          <section className="about-me__content">
            <h1 className="about-me--title">Hola, soy Cristina</h1>
            <h2 className="about-me--title">Desarrolladora front-end y UI/UX designer.</h2>
            <button className="btn btn--primary">Conóceme
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow">
                  <path id="flecha" d="M17.5723 16.1647L22.3487 11.3882L17.5723 6.61182" stroke="#0D21A1" stroke-width="1.71" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="linea" d="M1.65088 1.83533L1.65088 5.01961C1.65088 6.70867 2.32185 8.32853 3.51619 9.52288C4.71053 10.7172 6.33039 11.3882 8.01945 11.3882L22.3487 11.3882" stroke="#0D21A1" stroke-width="1.71" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </section>
        </section>
        <section className="projects">
          <section className="projects__information">
            <h3 className="projects--title">Proyectos</h3>
            <p className="projects--description">Cada proyecto es más que una simple colección de diseños y códigos; es una historia en sí misma, donde la pasión por la excelencia y la atención al detalle se entrelazan.</p>
          </section>
        </section>
        <section className="projects__container">
          <div className="carousel__container">
            <div className="carousel__track">
              {projects && projects.map((project) => {
                return (
                  <article className={project.type === "Academic" ? 'projects__card--primary' : 'projects__card--secondary'} >
                    <h4 className="projects__card--title">{project.title}</h4>
                    <div className="projects__card__footer">
                      <p className="projects__card--tag">{project.type}</p>
                      <button className={project.type === 'Academic' ? 'btn btn--fill--primary' : 'btn btn--fill--secondary'}>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="arrow">
                            <path id="flecha" d="M17.5723 16.1647L22.3487 11.3882L17.5723 6.61182" stroke="#fff" stroke-width="1.71" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="linea" d="M1.65088 1.83533L1.65088 5.01961C1.65088 6.70867 2.32185 8.32853 3.51619 9.52288C4.71053 10.7172 6.33039 11.3882 8.01945 11.3882L22.3487 11.3882" stroke="#fff" stroke-width="1.71" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
        <section className="experience">
          <h3 className="projects--title">Experiencia</h3>
          <p className="projects--description">Descubre mi trayectoria profesional, donde he tenido la oportunidad de poder crecer en ambos sectores; diseño y desarrollo.</p>

        </section>
      </main>

    </>
  )
}
export default HomePage