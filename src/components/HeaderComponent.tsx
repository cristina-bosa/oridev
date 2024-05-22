const HeaderComponent = () => {

  return (
    <header>
      <nav className="navbar">
        <section className="navbar__brand">
          <a href="/">Oridev</a>
        </section>
        <section>
          <ul className="navbar__menu">
            <li className="navbar__item"><a className="navbar__link" href="/">Proyectos</a></li>
            <li className="navbar__item"><a className="navbar__link" href="/about">Sobre mí</a></li>
            <li className="navbar__item"><a className="navbar__link" href="/contact">Contacto</a></li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default HeaderComponent