import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data/products.js'

const FEATURED_SLUGS = [
  "signature-cheesecake-flight",
  "brown-butter-cheesecake",
  "truffle-gift-box",
  "macaron-box",
]
const featured = FEATURED_SLUGS.map(s => PRODUCTS.find(p => p.slug === s)).filter(Boolean)

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Dallas, NC · Est. 2019</span>
            <h1 style={{ marginTop: '24px' }}>
              Specialty desserts,<br />
              baked in Dallas, <span className="display-italic">shipped everywhere.</span>
            </h1>
            <p className="hero-lead">
              Wedding cakes for our corner of North Carolina. Cheesecakes, cookies,
              truffles, and French macarons — hand-finished in our Gaston County bakery
              and overnighted cold to all 50 states.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary btn-arrow">Shop desserts</Link>
              <Link to="/custom-cakes" className="btn btn-ghost">Order a custom cake</Link>
            </div>
            <div className="hero-proof">
              <div className="proof-stat">
                <div className="proof-num">13</div>
                <div className="proof-label">Dessert categories</div>
              </div>
              <div className="proof-stat">
                <div className="proof-num">150+</div>
                <div className="proof-label">Items baked</div>
              </div>
              <div className="proof-stat">
                <div className="proof-num">50</div>
                <div className="proof-label">States shipped</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img className="main-img" src="/images/wedding-cake-hero.jpg" alt="Signature wedding cake" />
            <img className="accent-img" src="/images/case-truffles.jpg" alt="Hand-rolled truffles" />
            <span className="sticker">Ships cold · overnight</span>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          <span>Baked today, shipped tomorrow</span>
          <span>Family-owned in Dallas, NC</span>
          <span>Cold-packed, overnight-shipped</span>
          <span>Handwritten gift notes</span>
          <span>Eighteen years of dessert craft</span>
          <span>Baked today, shipped tomorrow</span>
          <span>Family-owned in Dallas, NC</span>
          <span>Cold-packed, overnight-shipped</span>
          <span>Handwritten gift notes</span>
          <span>Eighteen years of dessert craft</span>
        </div>
      </div>

      <section className="section container">
        <div className="section-head">
          <div className="section-head-text">
            <span className="eyebrow">01 · Shop favorites</span>
            <h2>The ones that keep finding their way to someone's doorstep.</h2>
          </div>
          <Link to="/shop" className="btn btn-ghost btn-sm btn-arrow">See all desserts</Link>
        </div>
        <div className="products-grid">
          {featured.map(p => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="section-tight container">
        <div className="split">
          <div className="split-media">
            <img src="/images/wedding-married.jpg" alt="Wedding cake table" />
          </div>
          <div className="split-text">
            <span className="eyebrow">02 · Two lanes</span>
            <h2>Local weddings. National gifts.</h2>
            <p>
              Wedding and occasion cakes stay close to home — we deliver across the
              Charlotte metro, Gaston County, and the surrounding towns we've served
              for nearly two decades.
            </p>
            <p>
              Everything else — cheesecakes, cookies, truffles, macarons, bars, gift
              boxes — packs cold and ships overnight anywhere in the country. One
              bakery, two ways to send a dessert.
            </p>
            <Link to="/custom-cakes" className="btn btn-primary btn-arrow" style={{ marginTop: '18px' }}>
              Plan a custom cake
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div className="section-head-text">
            <span className="eyebrow">03 · How it ships</span>
            <h2>From the oven to your door in three days.</h2>
            <p>
              Every national order is hand-packed in an insulated box with food-safe
              cold packs and overnight tracking.
            </p>
          </div>
        </div>
        <div className="ship-grid">
          <div className="ship-card">
            <div className="ship-step">01</div>
            <h3>You order</h3>
            <p>Choose your dessert and flavor. Tell us the ship-to zip and the day it should land.</p>
          </div>
          <div className="ship-card">
            <div className="ship-step">02</div>
            <h3>We bake</h3>
            <p>Made fresh the morning before ship day. Cooled, finished, hand-packed with care.</p>
          </div>
          <div className="ship-card">
            <div className="ship-step">03</div>
            <h3>Overnight to you</h3>
            <p>Sealed in an insulated cooler box, shipped overnight, arriving cold and ready.</p>
          </div>
        </div>
      </section>

      <section className="section-tight container">
        <div className="testimonial">
          <blockquote>
            "They cater to food allergies, prices are reasonable, and the communication
            is fantastic. The buttery cupcakes with all the icing options are standouts."
          </blockquote>
          <cite>— Yelp review · Dallas, NC</cite>
        </div>
      </section>

      <section className="section-tight container">
        <div className="cta-band">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Cakes of Kindness</span>
          <h2 style={{ marginTop: '16px' }}>Know someone who could use one today?</h2>
          <p>
            A tradition Brittany started at the original shop. Send a dessert box with
            a handwritten note to someone who's had a hard week, or a beautiful one.
          </p>
          <Link to="/shop/kindness-box" className="btn btn-primary btn-arrow">Send a kindness box</Link>
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <div className="split-text">
            <span className="eyebrow">04 · Behind the case</span>
            <h2>A Dallas kitchen, eighteen years in the making.</h2>
            <p>
              Brittany baked her first paying order at sixteen. After a decade on
              payroll kitchens across three towns, she opened Cake Me Away in 2019 and
              moved it to downtown Dallas, North Carolina in early 2026.
            </p>
            <p>
              The bakery runs on the same philosophy she had as a teenager with a stand
              mixer — real ingredients, a handwritten list, and a dessert worth driving
              for.
            </p>
            <Link to="/story" className="btn btn-ghost btn-sm btn-arrow" style={{ marginTop: '8px' }}>
              Read Brittany's story
            </Link>
          </div>
          <div className="split-media">
            <img src="/images/brittany-story.jpg" alt="Brittany, bakery founder" />
          </div>
        </div>
      </section>
    </>
  )
}
