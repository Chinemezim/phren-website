import { Link } from "react-router-dom";
import "./Phrenchie.css";

const pieces = [
  ["01-phrenchie-genesis.webp", "PHRENCHIE GENESIS", "THE FIRST CHAPTER"],
  ["02-bottom-to-top.webp", "BOTTOM TO TOP", "BUILT DIFFERENT"],
  ["03-chilling-at-the-top.webp", "CHILLING AT THE TOP", "DIFFERENT LEVEL. SAME DESTINATION."],
  ["04-phren-to-the-top.webp", "PHREN TO THE TOP", "EARLY ACCUMULATION TIME"],
  ["05-phren-lifestyle.webp", "PHREN LIFESTYLE", "NOT JUST A MEME"],
  ["06-phillything-for-everyone.webp", "PHILLYTHING FOR EVERYONE", "REAL PEOPLE. REAL COMMUNITY."],
  ["07-rockets-to-the-moon.webp", "ROCKETS TO THE MOON", "LAUNCH OPERATIONS"],
  ["08-when-it-rains.webp", "WHEN IT RAINS", "PHILLYTHING $PHREN"],
];

function Phrenchie() {
  return (
    <div className="phrenchie-page">
      <header className="ph-header">
        <Link to="/" className="ph-brand"><span>$PHREN</span><small>215</small></Link>
        <nav className="ph-nav">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link className="ph-active" to="/phrenchie">PHRENCHIE</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
        <Link to="/squad" className="ph-join">JOIN THE SQUAD →</Link>
      </header>

      <main>
        <section className="ph-hero">
          <div className="ph-hero-grid" />
          <p className="ph-eyebrow"><span /> $PHREN DIGITAL COLLECTION</p>
          <h1>MEET THE <em>PHRENCHIE.</em></h1>
          <p className="ph-lead">
            NFT-STYLE DIGITAL ART FROM THE 215.
            <br />BUILT AROUND THE CULTURE, THE CHARACTER AND THE SQUAD.
          </p>
          <div className="ph-hero-meta">
            <span>08 SELECTED PIECES</span><span>215 / PHILLY</span><span>$PHREN</span>
          </div>
        </section>

        <section className="ph-collection">
          <div className="ph-section-head">
            <div>
              <p className="ph-eyebrow">THE COLLECTION</p>
              <h2>BUILT TO BE <em>SEEN.</em></h2>
            </div>
            <p>A rotating gallery of PHRENCHIE artwork. More pieces can be added as the project grows.</p>
          </div>

          <div className="ph-grid">
            {pieces.map(([image, title, subtitle], index) => (
              <article className="ph-card" key={image}>
                <div className="ph-card-image-wrap">
                  <img
                    src={`/phrenchie/${image}`}
                    alt={`${title} — $PHREN digital artwork`}
                    className="ph-card-image"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <span className="ph-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="ph-card-tag">DIGITAL ART</span>
                </div>
                <div className="ph-card-copy">
                  <p>{subtitle}</p>
                  <h2>{title}</h2>
                  <span>$PHREN / 215</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ph-social">
          <p className="ph-eyebrow">STAY LOCKED IN</p>
          <h2>THE ART MOVES.<br /><em>THE SQUAD MOVES WITH IT.</em></h2>
          <p className="ph-social-copy">Follow $PHREN across the socials and catch the next drop.</p>
          <div className="ph-social-links">
            <a href="https://x.com/phren215" target="_blank" rel="noreferrer">X / @PHREN215</a>
            <a href="https://t.me/PHRENJAWNPHILLYTHING" target="_blank" rel="noreferrer">TELEGRAM / PHRENJAWNPHILLYTHING</a>
            <a href="https://www.tiktok.com/@mikecryptovision13" target="_blank" rel="noreferrer">TIKTOK / @MIKECRYPTOVISION13</a>
          </div>
        </section>

        <section className="ph-note">
          <span>PHRENCHIE / 215</span>
          <p>NFT-style artwork. Minting, collection details and token information will be added when officially ready.</p>
          <Link to="/contact">GET IN TOUCH →</Link>
        </section>
      </main>

      <footer className="ph-footer">
        <div><strong>$PHREN</strong><span>FROM THE 215. BUILT IN THE GRIND.</span></div>
        <Link to="/">BACK HOME ↑</Link>
      </footer>
    </div>
  );
}

export default Phrenchie;
