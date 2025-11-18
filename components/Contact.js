function Contact() {
  try {
    return (
      <section id="ubicanos" className="py-5" style={{backgroundColor: 'white'}} data-name="contact" data-file="components/Contact.js">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-3">Encuéntranos y Pide</h2>
            <p className="lead text-muted">Estamos listos para servirte</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <div className="ratio ratio-4x3">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890" 
                  className="rounded shadow"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy">
                </iframe>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="h-100 d-flex flex-column justify-content-center">
                <div className="mb-4">
                  <h5 className="fw-bold mb-2">Dirección</h5>
                  <p className="text-muted">Av. Principal 123, Colonia Centro, Ciudad</p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-2">Horarios</h5>
                  <p className="text-muted">Lunes a Domingo: 11:00 AM - 10:00 PM</p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-2">Teléfono</h5>
                  <p className="text-muted">+52 123 456 7890</p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-2">Email</h5>
                  <p className="text-muted">contacto@bh-restaurant.com</p>
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Síguenos</h5>
                  <div>
                    <a href="#" className="social-icon" style={{backgroundColor: 'var(--social-blue)', color: 'white'}}>
                      <div className="icon-facebook text-lg"></div>
                    </a>
                    <a href="#" className="social-icon" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white'}}>
                      <div className="icon-instagram text-lg"></div>
                    </a>
                    <a href="#" className="social-icon" style={{backgroundColor: '#000', color: 'white'}}>
                      <div className="icon-music text-lg"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center mt-5 pt-4 border-top">
          <p className="text-muted">&copy; 2025 BH - Burritos & Hamburguesas. Todos los derechos reservados.</p>
        </footer>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}