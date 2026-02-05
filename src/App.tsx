import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#ffffff',
    }}>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}