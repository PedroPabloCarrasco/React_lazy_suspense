import React, { useState, Suspense } from 'react';
const Image = React.lazy(() => import('./components/Image'));

const App = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/white-wall-3.png")',
    backgroundColor: '#f5f7fa',
    fontFamily: 'Segoe UI, sans-serif',
  };
  

  

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
    transition: 'all 0.3s ease-in-out',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    marginBottom: '30px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const buttonHover = e => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  };

  const buttonUnhover = e => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Galería Interactiva</h1>
        <button
          style={buttonStyle}
          onMouseOver={buttonHover}
          onMouseOut={buttonUnhover}
          onClick={toggle}
        >
          {show ? 'Ocultar Imagen' : 'Mostrar Imagen'}
        </button>
        <Suspense fallback={<p style={{ color: '#666' }}>Cargando imagen...</p>}>
          {show && <Image />}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
