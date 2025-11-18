function Navbar() {
  try {
    return (
      <nav className="navbar navbar-expand-lg fixed-top glass-effect" data-name="navbar" data-file="components/Navbar.js">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#inicio" style={{color: 'var(--primary-orange)'}}>
            BH
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#menu">Menú</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#ubicanos">Ubícanos</a>
              </li>
            </ul>
            <a href="https://wa.me/5212345678901?text=Hola%2C%20quiero%20hacer%20un%20pedido" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-primary-custom">
              Pedir Ahora
            </a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}