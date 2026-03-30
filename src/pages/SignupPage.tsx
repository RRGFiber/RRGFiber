import { useState } from 'react'
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'

export default function SignupPage() {
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
            <h1>Join the Future of Connectivity.</h1>
            <p>Create your account to access blazing-fast fiber service, manage your plan, and track your billing with ease.</p>
          </div>

          <div className="brand-footer" />
        </div>

        {/* Right Form Panel */}
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Sign up to get started with RRG Fiber portal.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User className="field-icon" size={17} />
                <input type="text" placeholder="Juan dela Cruz" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail className="field-icon" size={17} />
                <input type="email" placeholder="name@company.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock className="field-icon" size={17} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  required
                />
                {showPassword
                  ? <EyeOff className="toggle-icon" size={17} onClick={() => setShowPassword(false)} />
                  : <Eye className="toggle-icon" size={17} onClick={() => setShowPassword(true)} />
                }
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading} style={{ marginTop: '8px' }}>
              {isLoading ? 'Creating account…' : <><span>Create Account</span><ArrowRight size={17} /></>}
            </button>
          </form>

          <div className="auth-switch">
            Already have an account?{' '}
            <Link to="/login">Sign in instead</Link>
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
