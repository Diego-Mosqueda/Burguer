class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="btn btn-primary-custom">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [showMenuModal, setShowMenuModal] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const handleOpenModal = (category) => {
    setSelectedCategory(category);
    setShowMenuModal(true);
  };

  try {
    return (
      <div data-name="app" data-file="app.js">
        <Navbar />
        <Hero />
        <Menu onOpenModal={handleOpenModal} />
        <About />
        <Contact />
        <WhatsAppButton />
        <MenuModal 
          show={showMenuModal} 
          onClose={() => setShowMenuModal(false)}
          category={selectedCategory}
        />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);