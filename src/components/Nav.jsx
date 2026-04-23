import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          <img src="/images/logo.png" alt="Cake Me Away Bakery" />
          <span>Cake Me Away</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>Shop</NavLink>
          <NavLink to="/custom-cakes" className={({ isActive }) => isActive ? 'active' : ''}>Custom Cakes</NavLink>
          <NavLink to="/story" className={({ isActive }) => isActive ? 'active' : ''}>Our Story</NavLink>
        </nav>
        <div className="nav-cta">
          <Link to="/shop" className="nav-cart">
            Cart <span className="nav-cart-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
