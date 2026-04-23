export default function Story() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Our Story</span>
        <h1>A Dallas kitchen. Eighteen years in the making.</h1>
        <p>
          Brittany learned on a stand mixer at sixteen. Everything she's built since
          has started in that same place — real ingredients, a handwritten list, and
          a dessert worth driving for.
        </p>
      </section>

      <section className="section container">
        <div className="split">
          <div className="split-media">
            <img src="/images/brittany-story.jpg" alt="Brittany, founder of Cake Me Away" />
          </div>
          <div className="split-text">
            <span className="eyebrow">Founder · Brittany</span>
            <h2>From the first cake, for a neighbor.</h2>
            <p>
              Brittany's first paid cake was for a neighbor's graduation — $25,
              buttercream and fresh strawberries, decorated on the kitchen table
              after school. She was sixteen.
            </p>
            <p>
              A decade on other people's payroll kitchens followed — pastry line at a
              Charlotte hotel, a production bakery in Gastonia, a catering company that
              sent her to forty weddings in two years. Every stop taught her something
              she'd bring back to her own shop.
            </p>
            <p>
              Cake Me Away opened in Gastonia in 2019 with a single display case and a
              long custom-order book. The bakery moved to its current home on West Trade
              Street in Dallas in early 2026 — a bigger kitchen, a bigger case, and now,
              a national shipping program.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <div className="split-text">
            <span className="eyebrow">The case</span>
            <h2>Thirteen categories. One handwritten list.</h2>
            <p>
              Cookies, bars, truffles, chocolate-covered, cheesecakes, slice cakes,
              pies, cupcakes, cake pops, pastries, fudge, French macarons, and the
              specialties that don't fit a column header. Over a hundred and fifty
              items baked in rotation.
            </p>
            <p>
              The list is kept on paper at the front of the kitchen because every day
              it changes a little — a flavor comes back into season, a regular puts
              a request in, a Saturday cupcake becomes a Monday blondie.
            </p>
          </div>
          <div className="split-media">
            <img src="/images/case-cookies.jpg" alt="Cookie display case" />
          </div>
        </div>
      </section>

      <section className="section-tight container">
        <div className="cta-band">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Come say hi</span>
          <h2 style={{ marginTop: '16px' }}>120 W Trade St, Dallas NC</h2>
          <p>
            Tuesday 1–7, Wednesday through Friday 10–7, Saturday 10–5. Call ahead
            for custom pickups.
          </p>
          <a href="tel:7048605135" className="btn btn-primary btn-arrow">Call (704) 860-5135</a>
        </div>
      </section>
    </>
  )
}
