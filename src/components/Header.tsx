import { Zap, Bell, LogOut, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'

interface HeaderProps {
  showSearch?: boolean
  userName?: string
  avatarLetter?: string
}

export default function Header({ showSearch = false, avatarLetter = "A" }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="db-topnav">
      <div className="db-topnav-left">
        <div className="db-logo" onClick={() => navigate('/dashboard')}>
          <div className="brand-logo-icon">
            <Zap size={20} fill="white" color="white" />
          </div>
          <span>RRG Fiber</span>
        </div>
      </div>

      {showSearch && (
        <div className="db-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
      )}

      <div className="db-topnav-right">
        <button className="db-icon-btn"><Bell size={22} /></button>
        <div className="db-avatar-container">
          <div className="db-avatar">{avatarLetter}</div>
          <div className="db-dropdown">
            <button className="db-dropdown-item" onClick={() => navigate('/settings')}>
              Account Settings
            </button>
            <div className="db-dropdown-divider" />
            <button className="db-dropdown-item db-dropdown-logout" onClick={() => navigate('/login')}>
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
