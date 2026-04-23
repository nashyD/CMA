export default function CustomCakes() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Local · Charlotte metro</span>
        <h1>Custom cakes, made the old way.</h1>
        <p>
          Wedding cakes, birthday cakes, baby reveals, showpieces — designed with you,
          decorated by hand at our Dallas bakery. Pickup or local delivery across Gaston
          County and the surrounding towns.
        </p>
      </section>

      <section className="section container">
        <div className="section-head">
          <div className="section-head-text">
            <span className="eyebrow">Lead times</span>
            <h2>The more time we have, the more we can do.</h2>
            <p>
              Every custom is built to order. These are the minimum lead times we ask
              for by scale — longer is always welcome.
            </p>
          </div>
        </div>

        <div className="tier-grid">
          <div className="tier-card">
            <div className="tier-card-lead">3–7 days out</div>
            <h3>Simple designs</h3>
            <p>Buttercream, smooth fondant, simple sprinkles or florals. Perfect for a birthday you almost forgot.</p>
            <div className="tier-card-price">From $85</div>
          </div>
          <div className="tier-card">
            <div className="tier-card-lead">7–14 days out</div>
            <h3>Custom designs</h3>
            <p>Themed birthdays, baby reveals, hand-piped detail, multi-tier shapes. Photo inspiration welcome.</p>
            <div className="tier-card-price">From $145</div>
          </div>
          <div className="tier-card">
            <div className="tier-card-lead">14–21 days out</div>
            <h3>3D &amp; detailed cakes</h3>
            <p>Sculpted shapes, structured builds, fine piping and modeling chocolate. Mario, Grinch, princess castles.</p>
            <div className="tier-card-price">From $240</div>
          </div>
          <div className="tier-card">
            <div className="tier-card-lead">21–30 days out</div>
            <h3>Events &amp; vow renewals</h3>
            <p>Dessert bars, tiered showpieces, coordinated batch desserts for parties of 30–100.</p>
            <div className="tier-card-price">From $450</div>
          </div>
          <div className="tier-card" style={{ gridColumn: '1 / -1' }}>
            <div className="tier-card-lead">45–60 days out</div>
            <h3>Wedding cakes · 50+ guests</h3>
            <p>
              Full-scale wedding cakes for receptions of fifty and up. Includes a tasting
              session at the bakery, mood-board review, and delivery with on-site
              assembly across the Charlotte metro.
            </p>
            <div className="tier-card-price">From $650 · priced by guest count and design</div>
          </div>
        </div>
      </section>

      <section className="section-tight container">
        <div className="split">
          <div className="split-media">
            <img src="/images/wedding-dessert-bar.jpg" alt="Wedding dessert bar" />
          </div>
          <div className="split-text">
            <span className="eyebrow">Start here</span>
            <h2>Tell us about the day.</h2>
            <p>
              A few quick questions and we'll draft a proposal within two business days.
              No deposit to ask.
            </p>

            <form className="inline-form" style={{ marginTop: '24px' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="cc-name">Your name</label>
                <input id="cc-name" type="text" placeholder="Brittany Davis" />
              </div>
              <div>
                <label htmlFor="cc-email">Email</label>
                <input id="cc-email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="cc-date">Event date</label>
                <input id="cc-date" type="date" />
              </div>
              <div>
                <label htmlFor="cc-guests">Guest count</label>
                <input id="cc-guests" type="number" placeholder="40" />
              </div>
              <div className="full">
                <label htmlFor="cc-msg">Tell us what you're imagining</label>
                <textarea id="cc-msg" rows="4" placeholder="Theme, flavors, inspiration photos, any dietary needs..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-arrow">Send for a proposal</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
