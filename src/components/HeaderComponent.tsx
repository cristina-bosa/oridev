const HeaderComponent = () => {

  return (
    <header>
      <nav className="navbar">
        <section className="navbar__brand">
          <a href="/">Oridev</a>
        </section>
        <section>
          <ul className="navbar__menu">
            <li className="navbar__item"><a className="navbar__link" href="/#projects">Proyectos</a></li>            
            <li className="navbar__item"><a className="navbar__link" href="/#skills">Skills</a></li>            
            <li className="navbar__item"><a className="navbar__link" href="/#experience">Experiencia</a></li>            
            <li className="navbar__item"><a className="navbar__link" href="/">Contacto</a></li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default HeaderComponent