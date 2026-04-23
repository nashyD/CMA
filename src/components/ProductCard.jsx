import { Link } from 'react-router-dom'

export default function ProductCard({ p }) {
  return (
    <Link to={`/shop/${p.slug}`} className="product-card">
      <div className="product-card-media">
        <img src={p.image} alt={p.name} />
        {p.tags && p.tags[0] && (
          <span className="product-card-badge">{p.tags[0]}</span>
        )}
        <span className="product-card-quickadd" aria-label="Quick add">+</span>
      </div>
      <div className="product-card-body">
        <div className="product-card-head">
          <h4 className="product-card-name">{p.name}</h4>
          <span className="product-card-price">{p.priceLabel}</span>
        </div>
        <div className="product-card-unit">{p.unit}</div>
      </div>
    </Link>
  )
}
