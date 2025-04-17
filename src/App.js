import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load del componente Image
const Image = React.lazy(() => import('./components/Image'));

const App = () => {
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Leer valores guardados en localStorage
  useEffect(() => {
    const savedShow = localStorage.getItem('showImage');
    const savedTheme = localStorage.getItem('darkMode');
    if (savedShow) setShow(JSON.parse(savedShow));
    if (savedTheme) setDarkMode(JSON.parse(savedTheme));
  }, []);

  // Guardar valores en localStorage
  useEffect(() => {
    localStorage.setItem('showImage', JSON.stringify(show));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [show, darkMode]);

  // Estilos
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: darkMode
      ? 'linear-gradient(135deg, #1e1e2f, #12121c)'
      : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.3s ease-in-out',
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#2a2a3c' : '#fff',
    color: darkMode ? '#f5f5f5' : '#333',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: darkMode
      ? '0 10px 30px rgba(0,0,0,0.5)'
      : '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
    transition: 'all 0.3s ease-in-out',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    background: darkMode
      ? 'linear-gradient(to right, #667eea, #764ba2)'
      : 'linear-gradient(to right, #4facfe, #00f2fe)',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    marginBottom: '20px',
    marginRight: '10px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: '20px', fontWeight: '600', fontSize: '24px' }}>
          ✨ Galería React ✨
        </h1>
        <div style={{ marginBottom: '30px' }}>
          <button style={buttonStyle} onClick={() => setShow(!show)}>
            {show ? 'Ocultar Imagen' : 'Mostrar Imagen'}
          </button>
          <button style={buttonStyle} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
          </button>
        </div>

        <Suspense fallback={<p>Cargando imagen...</p>}>
          <AnimatePresence>
            {show && (
              <motion.div
                key="image"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Image />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
