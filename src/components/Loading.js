import React, { useRef, useEffect } from 'react';
import './styles/Loading.css';
import img from './assests/loadingimg.png';

const LoadingSpinner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binaryChars = ['0', '1'];
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function drawBinary() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      requestAnimationFrame(drawBinary);
    }

    drawBinary();
  }, []);

  return (
    <div className="loading-container">
      <canvas ref={canvasRef} className="binary-canvas" />
      <div className="loading-image-container">
        <img src={img} alt="Loading" className="loading-image" />
        <p className="loading-text">Please Wait</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;