import { Lock, Zap, LogOut } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import '../styles/SettingsPage.css'

export default function SettingsPage() {
  const navigate = useNavigate()

  return (
    <div className="db-shell">
      <Header />
      <main className="db-main">
        <div className="settings-container">
          <div className="settings-header">
            <h1 className="settings-title">Account Settings</h1>
            <p className="settings-subtitle">Manage your security preferences and session access.</p>
          </div>

          <div className="settings-card">
            <div className="settings-card-header">
              <Lock size={20} className="settings-icon-blue" />
              <h2 className="settings-card-title">Change Password</h2>
            </div>
            
            <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
              <div className="settings-form-grid">
                <div className="settings-form-group full-width">
                  <label className="settings-label">CURRENT PASSWORD</label>
                  <input type="password" placeholder="••••••••" className="settings-input" />
                </div>
                <div className="settings-form-group">
                  <label className="settings-label">NEW PASSWORD</label>
                  <input type="password" placeholder="••••••••" className="settings-input" />
                </div>
                <div className="settings-form-group">
                  <label className="settings-label">CONFIRM NEW PASSWORD</label>
                  <input type="password" placeholder="••••••••" className="settings-input" />
                </div>
              </div>
              <button type="submit" className="settings-btn-primary">Update Password</button>
            </form>
          </div>

          <div className="settings-card">
            <div className="settings-card-header">
              <Zap size={20} className="settings-icon-red" />
              <h2 className="settings-card-title">Account Actions</h2>
            </div>

            <div className="settings-danger-box">
              <div className="settings-danger-info">
                <h4>Session Control</h4>
                <p>Sign out of your current browser session.</p>
              </div>
              <button className="settings-btn-danger-outline" onClick={() => navigate('/login')}>
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
