import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getProduct } from '../data/products.js'

const FLAVOR_OPTIONS = {
  "dozen-cookies-classic": ["Brown Butter Chip", "Oatmeal Cream", "Snickerdoodle", "Molasses", "PB Blossom", "Double Chocolate"],
  "truffle-gift-box": ["Salted Caramel", "Espresso", "Raspberry", "Passion Fruit", "Brown Butter", "Hazelnut"],
  "macaron-box": ["Pistachio", "Raspberry", "Vanilla Bean", "Espresso", "Lemon Curd", "Dark Chocolate"],
  "signature-cheesecake-flight": ["Brown Butter Biscoff", "Lemon Curd", "Raspberry Swirl", "Espresso", "Vanilla Bean", "Baker's Choice"],
}

const SIZE_OPTIONS = {
  "brown-butter-cheesecake": ['6" · serves 8', '8" · serves 12', '10" · serves 16'],
  "classic-vanilla-cheesecake": ['6" · serves 8', '8" · serves 12', '10" · serves 16'],
  "keto-cheesecake": ['6" · serves 8', '8" · serves 12'],
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [qty, setQty] = useState(1)
  const [sizeIdx, setSizeIdx] = useState(0)

  if (!product) return <Navigate to="/shop" replace />

  const flavors = FLAVOR_OPTIONS[slug]
  const sizes = SIZE_OPTIONS[slug]

  return (
    <div className="container">
      <div className="pd-layout">
        <div className="pd-media">
          <img src={product.hero} alt={product.name} />
        </div>
        <div className="pd-body">
          <div className="pd-eyebrow eyebrow">
            <Link to="/shop">Shop</Link> · {product.category.replace('-', ' ')}
          </div>
          <h1>{product.name}</h1>
          <div className="pd-unit">{product.unit}</div>
          <div className="pd-price">{product.priceLabel}</div>
          <div className="pd-ship">{product.leadTime}</div>
          <p className="pd-description">{product.long}</p>

          <div className="pd-options">
            {sizes && (
              <div>
                <div className="pd-option-label">Size</div>
                <div className="pd-option-row">
                  {sizes.map((s, i) => (
                    <button
                      key={s}
                      className={`pd-option-pill ${sizeIdx === i ? 'selected' : ''}`}
                      onClick={() => setSizeIdx(i)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {flavors && (
              <div>
                <div className="pd-option-label">Choose your flavors</div>
                <div className="pd-option-row">
                  {flavors.map(f => (
                    <span key={f} className="pd-option-pill">{f}</span>
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '12px' }}>
                  Pick any combination at checkout.
                </p>
              </div>
            )}
          </div>

          <div className="pd-add">
            <div className="pd-qty" role="group" aria-label="Quantity">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
              <span className="pd-qty-val">{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">+</button>
            </div>
            <button className="btn btn-primary btn-arrow" style={{ flex: 1 }}>
              Add to cart · ${product.price * qty}
            </button>
          </div>

          <dl className="pd-detail-rows">
            <div className="pd-detail-row"><dt>Lead time</dt><dd>{product.leadTime}</dd></div>
            <div className="pd-detail-row"><dt>Shipping</dt><dd>Cold-packed, overnight · all 50 states</dd></div>
            <div className="pd-detail-row"><dt>Shelf life</dt><dd>Best within 4 days · freezes well</dd></div>
            <div className="pd-detail-row"><dt>Allergens</dt><dd>Contains wheat, dairy, egg. Nut-free on request.</dd></div>
          </dl>
        </div>
      </div>
    </div>
  )
}
