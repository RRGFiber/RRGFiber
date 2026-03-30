import { Zap } from 'lucide-react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="db-footer">
      <div className="db-footer-brand">
        <Zap size={14} fill="currentColor" />
        <span>RRG FIBER</span>
        <span className="db-footer-copy">© 2023 RRG Infrastructure Inc.</span>
      </div>
      <div className="db-footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  )
}
