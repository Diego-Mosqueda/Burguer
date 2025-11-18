function About() {
  try {
    return (
      <section className="py-5" style={{backgroundColor: 'var(--light-gray)'}} data-name="about" data-file="components/About.js">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600" 
                   alt="Cocina BH" 
                   className="img-fluid rounded shadow" 
                   style={{objectFit: 'cover', height: '400px', width: '100%'}} />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="display-5 fw-bold mb-4">Hechos con Pasión</h2>
              <p className="lead mb-3">
                En BH creemos que la calidad comienza con los ingredientes. Por eso seleccionamos cuidadosamente cada componente de nuestros platillos.
              </p>
              <p className="fs-5 text-muted">
                Nuestra misión es brindarte una experiencia culinaria única, donde cada bocado te transporte a los sabores más auténticos. Preparamos todo con dedicación y amor por la cocina.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}