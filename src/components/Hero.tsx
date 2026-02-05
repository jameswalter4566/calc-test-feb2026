import { useState, useEffect } from 'react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #111827 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3,
        pointerEvents: 'none',
      }} />

      {/* Background glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '1000px',
        background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        animation: 'pulse 4s ease-in-out infinite',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '1000px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 24px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '100px',
          marginBottom: '32px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}>
          <span style={{ fontSize: '14px', color: '#3b82f6', fontWeight: 500 }}>
            🧮 Smart Calculator Experience
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.1,
          margin: '0 0 32px',
          background: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
        }}>
          Calculate Anything,
          <br />
          Instantly & Beautifully
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '22px',
          color: '#9ca3af',
          lineHeight: 1.6,
          margin: '0 0 48px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Experience the future of calculations with our elegant, powerful calculator app. 
          Designed for speed, accuracy, and visual appeal - making every computation effortless.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '18px 40px',
              fontSize: '18px',
              fontWeight: 600,
              color: '#fff',
              background: isHovered
                ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: isHovered
                ? '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)'
                : '0 10px 30px rgba(59, 130, 246, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              Launch Calculator
            </span>
          </button>

          <button style={{
            padding: '18px 40px',
            fontSize: '18px',
            fontWeight: 600,
            color: '#9ca3af',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease',
          }}>
            View Features
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginTop: '80px',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '10K+', label: 'Daily Calculations' },
            { value: '99.9%', label: 'Accuracy Rate' },
            { value: '0.01s', label: 'Response Time' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#3b82f6',
                marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}