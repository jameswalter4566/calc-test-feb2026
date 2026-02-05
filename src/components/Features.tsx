import { useState } from 'react';

export function Features() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features = [
    {
      id: '1',
      icon: '⚡',
      title: 'Lightning Fast Calculations',
      description: 'Instant computation with optimized algorithms. Handle complex calculations in milliseconds with precision floating-point arithmetic.',
    },
    {
      id: '2',
      icon: '🔒',
      title: 'Secure & Private',
      description: 'All calculations are processed locally on your device. No data transmission, complete privacy protection for sensitive computations.',
    },
    {
      id: '3',
      icon: '🌐',
      title: 'Universal Compatibility',
      description: 'Works seamlessly across all devices and platforms. Responsive design that adapts perfectly to desktop, tablet, and mobile.',
    },
    {
      id: '4',
      icon: '✨',
      title: 'Intuitive Interface',
      description: 'Clean, modern design with smooth animations. Large buttons, clear display, and smart keyboard shortcuts for effortless usage.',
    },
    {
      id: '5',
      icon: '📱',
      title: 'Advanced Functions',
      description: 'Scientific calculator capabilities with trigonometric, logarithmic, and statistical functions. Perfect for students and professionals.',
    },
    {
      id: '6',
      icon: '💾',
      title: 'Memory & History',
      description: 'Save important calculations and access calculation history. Smart memory functions and result storage for complex workflows.',
    },
  ];

  return (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #111827 0%, #0a0a0a 100%)',
      position: 'relative',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '100px',
            marginBottom: '24px',
          }}>
            <span style={{ fontSize: '14px', color: '#3b82f6', fontWeight: 500 }}>
              Powerful Features
            </span>
          </div>
          
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 24px',
            lineHeight: 1.2,
          }}>
            Built for Excellence
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Every feature designed with precision and user experience in mind. 
            Discover what makes our calculator the perfect tool for all your computational needs.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px',
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '32px',
                background: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.08)'
                  : 'rgba(255, 255, 255, 0.03)',
                border: '1px solid',
                borderColor: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.3)'
                  : 'rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                transform: hoveredId === feature.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredId === feature.id
                  ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)'
                  : '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                filter: hoveredId === feature.id ? 'brightness(1.2)' : 'brightness(1)',
                transition: 'filter 0.3s ease',
              }}>
                {feature.icon}
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#fff',
                margin: '0 0 12px',
                lineHeight: 1.3,
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                fontSize: '15px',
                color: '#9ca3af',
                margin: 0,
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
        }}>
          <div style={{
            padding: '48px 32px',
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#fff',
              margin: '0 0 16px',
            }}>
              Ready to Calculate Smarter?
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#9ca3af',
              margin: '0 0 32px',
            }}>
              Join thousands of users who have upgraded their calculation experience.
            </p>
            <button style={{
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.25)',
              transition: 'all 0.2s ease',
            }}>
              Start Calculating Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}