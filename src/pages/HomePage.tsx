import { Zap, Router, Rocket, CheckCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="home-logo" onClick={() => navigate('/')}>
          <span>RRGFiber</span>
        </div>
        <nav className="home-nav">
          <div className="home-nav-links">
            <Link to="/">Home</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/login" className="btn-signin">Sign In</Link>
          </div>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="connectivity-badge">
          <Zap size={14} fill="currentColor" />
          NEXT-GEN CONNECTIVITY
        </div>
        
        <h1 className="hero-title">
          Welcome to <span>RRG Fiber</span>
        </h1>
        
        <p className="hero-description">
          Experience ultra-fast internet that keeps up with your life. No throttling, no data caps—just pure fiber speed.
        </p>

        <div className="plans-grid">
          {/* Starter Fiber */}
          <div className="plan-card">
            <div className="plan-icon">
              <Router size={32} />
            </div>
            
            <h2 className="plan-type">Starter Fiber</h2>
            <p className="plan-for">Perfect for browsing and streaming.</p>
            
            <div className="plan-speed">
              <span className="speed-value">30</span>
              <span className="speed-unit">Mbps</span>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <span className="feature-check"><CheckCircle size={18} fill="currentColor" /></span>
                Unlimited Data
              </li>
              <li className="feature-item">
                <span className="feature-check"><CheckCircle size={18} fill="currentColor" /></span>
                Fiber Optic Connection
              </li>
            </ul>
            
            <div className="plan-price">
              <span className="price-currency">$</span>
              <span className="price-value">29</span>
              <span className="price-period">/mo</span>
            </div>
            
            <button className="btn-subscribe" onClick={() => navigate('/signup')}>
              Subscribe
            </button>
          </div>

          {/* Ultra Fiber */}
          <div className="plan-card premium">
            <div className="popular-badge">POPULAR</div>
            <div className="plan-icon">
              <Rocket size={32} />
            </div>
            
            <h2 className="plan-type">Ultra Fiber</h2>
            <p className="plan-for">Best for gaming and 4K streams.</p>
            
            <div className="plan-speed">
              <span className="speed-value">100</span>
              <span className="speed-unit">Mbps</span>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <span className="feature-check"><CheckCircle size={18} fill="currentColor" /></span>
                Priority Bandwidth
              </li>
              <li className="feature-item">
                <span className="feature-check"><CheckCircle size={18} fill="currentColor" /></span>
                Lower Ping for Gaming
              </li>
            </ul>
            
            <div className="plan-price">
              <span className="price-currency">$</span>
              <span className="price-value">59</span>
              <span className="price-period">/mo</span>
            </div>
            
            <button className="btn-subscribe" onClick={() => navigate('/signup')}>
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-copyright">
          © 2024 RRG FIBER
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}
