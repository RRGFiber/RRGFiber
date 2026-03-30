import { 
  Calendar, Wifi, ArrowUpDown, Infinity as InfinityIcon,
  Download, ChevronLeft, ChevronRight, Filter
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const transactions = [
  { date: 'Oct 12, 2023', ref: 'RRG-INV-99231', amount: '₱1,499.00', status: 'PAID' },
  { date: 'Sep 12, 2023', ref: 'RRG-INV-98102', amount: '₱1,499.00', status: 'PAID' },
  { date: 'Aug 12, 2023', ref: 'RRG-INV-97055', amount: '₱1,849.00', status: 'PAID' },
  { date: 'Jul 12, 2023', ref: 'RRG-INV-95912', amount: '₱1,499.00', status: 'PAID' },
  { date: 'Jun 12, 2023', ref: 'RRG-INV-94101', amount: '₱1,499.00', status: 'PAID' },
]

export default function DashboardPage() {
  return (
    <div className="db-shell">
      <Header />
      <main className="db-main">
        <DashboardView />
      </main>
      <Footer />
    </div>
  )
}

/* ============================================================
   DASHBOARD VIEW (Account Overview + Billing History)
   ============================================================ */
function DashboardView() {
  return (
    <>
      {/* ── Account Overview ── */}
      <div className="db-greeting">WELCOME BACK, ALEX</div>
      <h1 className="db-page-title">Account Overview</h1>

      <div className="db-overview-grid">
        {/* Subscription card */}
        <div className="db-card db-subscription-card">
          <div className="db-sub-header">
            <div>
              <p className="db-sub-label">CURRENT SUBSCRIPTION</p>
              <h2 className="db-sub-plan">50 Mbps Fiber Plan</h2>
            </div>
            <span className="db-badge-active">● ACTIVE</span>
          </div>

          <div className="db-sub-stats">
            <div className="db-stat-item">
              <div className="db-stat-icon"><ArrowUpDown size={14} /></div>
              <p className="db-stat-label">DOWNLOAD SPEED</p>
              <p className="db-stat-value">52.4 Mbps</p>
            </div>
            <div className="db-stat-divider" />
            <div className="db-stat-item">
              <div className="db-stat-icon"><ArrowUpDown size={14} /></div>
              <p className="db-stat-label">UPLOAD SPEED</p>
              <p className="db-stat-value">49.8 Mbps</p>
            </div>
            <div className="db-stat-divider" />
            <div className="db-stat-item">
              <div className="db-stat-icon"><InfinityIcon size={14} /></div>
              <p className="db-stat-label">DATA LIMIT</p>
              <p className="db-stat-value">Unlimited</p>
            </div>
          </div>

          <div className="db-hardware-row">
            <div className="db-hardware-icon"><Wifi size={18} /></div>
            <div>
              <p className="db-hw-label">Hardware ID</p>
              <p className="db-hw-value">RRG-8842-XF</p>
            </div>
          </div>
        </div>

        {/* Balance card */}
        <div className="db-card db-balance-card">
          <p className="db-balance-label">OUTSTANDING BALANCE</p>
          <p className="db-balance-amount">₱1,499.00</p>
          <div className="db-due-row">
            <Calendar size={14} />
            <span>Due Date: Nov 15, 2023</span>
          </div>
          <button className="db-pay-btn">
            Pay Now &nbsp;<span className="db-pay-divider">|</span>&nbsp; GCash
          </button>
          <p className="db-secure-note">SECURE GCASH INTEGRATION ONLY</p>
        </div>
      </div>

      {/* ── Billing History ── */}
      <div className="bh-section-header">
        <h2 className="bh-section-title">Billing History</h2>
      </div>

      {/* Summary cards */}
      <div className="bh-summary-grid">
        <div className="bh-summary-card">
          <p className="bh-summary-label">OUTSTANDING BALANCE</p>
          <p className="bh-summary-value">₱0.00</p>
          <p className="bh-summary-sub green-dot">● All accounts settled</p>
        </div>
        <div className="bh-summary-card">
          <p className="bh-summary-label">LAST PAYMENT</p>
          <p className="bh-summary-value">₱1,499.00</p>
          <p className="bh-summary-sub">Processed on Oct 12, 2023</p>
        </div>
        <div className="bh-summary-card">
          <p className="bh-summary-label">NEXT AUTO-PAY</p>
          <p className="bh-summary-value">Nov 12</p>
          <p className="bh-summary-sub">Visa ending in ••••&thinsp;4242</p>
        </div>
      </div>

      {/* Transactions table */}
      <div className="bh-table-card">
        <div className="bh-table-header">
          <h3 className="bh-table-title">Recent Transactions</h3>
          <button className="bh-filter-btn">
            <Filter size={13} /> Filter: Last 6 Months
          </button>
        </div>

        <table className="bh-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>REFERENCE NO.</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>RECEIPT</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i}>
                <td>{tx.date}</td>
                <td className="bh-ref">{tx.ref}</td>
                <td className="bh-amount">{tx.amount}</td>
                <td><span className="bh-badge-paid">● PAID</span></td>
                <td>
                  <button className="bh-download-btn">
                    <Download size={13} /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bh-table-footer">
          <span className="bh-count">Showing 1–{transactions.length} of 24 transactions</span>
          <div className="bh-pagination">
            <button className="bh-page-btn" disabled><ChevronLeft size={15} /></button>
            <button className="bh-page-btn"><ChevronRight size={15} /></button>
          </div>
        </div>
      </div>
    </>
  )
}

