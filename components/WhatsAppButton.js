function WhatsAppButton() {
  try {
    return (
      <a href="https://wa.me/5212345678901?text=Hola%2C%20quiero%20hacer%20un%20pedido" 
         target="_blank" 
         rel="noopener noreferrer"
         className="position-fixed d-flex align-items-center justify-content-center rounded-circle shadow-lg"
         style={{
           bottom: '30px',
           right: '30px',
           width: '60px',
           height: '60px',
           backgroundColor: '#25D366',
           zIndex: 1000,
           animation: 'pulse 2s infinite',
           textDecoration: 'none'
         }}
         data-name="whatsapp-button"
         data-file="components/WhatsAppButton.js">
        <div className="icon-message-circle text-white" style={{fontSize: '28px'}}></div>
      </a>
    );
  } catch (error) {
    console.error('WhatsAppButton component error:', error);
    return null;
  }
}