function Hero() {
  try {
    return (
      <section id="inicio" 
               className="position-relative d-flex align-items-center justify-content-center text-center text-white" 
               style={{
                 minHeight: '100vh',
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundAttachment: 'fixed'
               }}
               data-name="hero"
               data-file="components/Hero.js">
        <div className="container" data-aos="fade-in">
          <h1 className="display-2 fw-bold mb-4">Los Burritos y Burgers que te mereces</h1>
          <p className="lead mb-5 fs-4">Ingredientes frescos, sabores auténticos y la mejor calidad en cada bocado</p>
          <a href="#menu" className="btn btn-secondary-custom btn-lg">Ver Menú</a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}