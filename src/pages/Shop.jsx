import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES } from '../data/products.js'

export default function Shop() {
  const [cat, setCat] = useState("all")
  const filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat)

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Shop</span>
        <h1>Ship-ready desserts.</h1>
        <p>
          Everything in our case that packs well for overnight. Pick your flavors,
          pick your ship day — we bake the morning before.
        </p>
      </section>

      <section className="section-tight container">
        <div className="filters" role="tablist">
          {CATEGORIES.map(c => (
            <button
              key={c.slug}
              className={`filter-pill ${cat === c.slug ? 'active' : ''}`}
              onClick={() => setCat(c.slug)}
              role="tab"
              aria-selected={cat === c.slug}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filtered.map(p => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  )
}
