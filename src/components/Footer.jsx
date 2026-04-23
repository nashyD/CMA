import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/logo.png" alt="" />
              <span>Cake Me Away</span>
            </div>
            <p>
              Specialty desserts decorated by hand in Dallas, North Carolina.
              Shipped overnight to all 50 states.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <div className="footer-links">
              <Link to="/shop">Everything</Link>
              <Link to="/shop">Cheesecakes</Link>
              <Link to="/shop">Cookies &amp; Bars</Link>
              <Link to="/shop">Gift Boxes</Link>
            </div>
          </div>
          <div>
            <h4>Local</h4>
            <div className="footer-links">
              <Link to="/custom-cakes">Custom Cakes</Link>
              <Link to="/custom-cakes">Weddings</Link>
              <Link to="/story">Our Story</Link>
              <a href="https://www.google.com/maps/place/120+W+Trade+St,+Dallas,+NC+28034" target="_blank" rel="noopener noreferrer">Visit the Bakery</a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <span>120 W Trade St<br />Dallas, NC 28034</span>
              <a href="tel:7048605135">(704) 860-5135</a>
              <a href="https://instagram.com/cakemeawaybakery1" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/cakemeawaybakerygaston" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Cake Me Away Bakery · Dallas, NC</div>
          <div>Site by <a href="https://tsd-modernization.com" target="_blank" rel="noopener noreferrer">TSD Modernization</a></div>
        </div>
      </div>
    </footer>
  )
}
