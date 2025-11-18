function Menu() {
  const menuItems = [
    {
      name: 'Burrito Clásico',
      description: 'Carne asada, frijoles, arroz, queso y pico de gallo',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400'
    },
    {
      name: 'Hamburguesa Premium',
      description: 'Carne angus, queso cheddar, tocino y vegetales frescos',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
    },
    {
      name: 'Burrito de Pollo',
      description: 'Pollo marinado, aguacate, crema y salsa especial',
      price: '$110',
      image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=400'
    }
  ];

  try {
    return (
      <section id="menu" className="py-5" style={{backgroundColor: 'white'}} data-name="menu" data-file="components/Menu.js">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-3">Nuestros Favoritos</h2>
            <p className="lead text-muted">Los platillos que nuestros clientes más aman</p>
          </div>
          <div className="row g-4">
            {menuItems.map((item, index) => (
              <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card menu-card shadow-sm h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} style={{height: '250px', objectFit: 'cover'}} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <p className="fs-4 fw-bold mb-0" style={{color: 'var(--primary-orange)'}}>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <a href="#" className="btn btn-primary-custom btn-lg">Ver Menú Completo</a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Menu component error:', error);
    return null;
  }
}