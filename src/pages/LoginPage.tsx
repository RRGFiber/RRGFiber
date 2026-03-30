import { useState } from 'react'
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate('/dashboard')
    }, 1500)
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* Left Brand Panel */}
        <div className="auth-brand">
          <div className="brand-header">
            <div className="brand-logo-icon">
              <Zap size={18} fill="white" color="white" />
            </div>
            <span>RRG Fiber</span>
          </div>

          <div className="brand-content">
            <h1>Experience the<br />Speed of Light.</h1>
            <p>Manage your ultra-high-speed connection, view real-time performance, and handle billing all in one place.</p>
          </div>

          <div className="brand-footer" />
        </div>

        {/* Right Form Panel */}
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Please enter your credentials to access your portal.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail className="field-icon" size={17} />
                <input type="email" placeholder="name@company.com" required />
              </div>
            </div>

            <div className="form-group">
              <div className="label-flex">
                <label>Password</label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              <div className="input-wrapper">
                <Lock className="field-icon" size={17} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
                />
                {showPassword
                  ? <EyeOff className="toggle-icon" size={17} onClick={() => setShowPassword(false)} />
                  : <Eye className="toggle-icon" size={17} onClick={() => setShowPassword(true)} />
                }
              </div>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="keep-signed-in" />
              <label htmlFor="keep-signed-in">Keep me signed in</label>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Signing in…' : <><span>Sign In to Portal</span><ArrowRight size={17} /></>}
            </button>
          </form>

          <div className="auth-switch">
            New to RRG Fiber?{' '}
            <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <span>© 2024 RRG Fiber Infrastructure. All rights reserved.</span>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </footer>
    </div>
  )
}
