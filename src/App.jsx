import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const journey = [
  {
    number: "01",
    title: "THE COME UP",
    text: "Started with almost nothing. Built on hustle, instinct and conviction.",
  },
  {
    number: "02",
    title: "THE SETBACK",
    text: "One deal changed everything. The money disappeared. The people disappeared.",
  },
  {
    number: "03",
    title: "THE COMEBACK",
    text: "The bulldog took a hit — but he got back to work.",
  },
  {
    number: "04",
    title: "THE SQUAD",
    text: "More bulldogs. More hustlers. More believers.",
  },
  {
    number: "05",
    title: "THE VISION",
    text: "From the corner to the penthouse, without forgetting where it started.",
  },
  {
    number: "06",
    title: "THE MOVEMENT",
    text: "The door is open. Now it is time to bring the squad up.",
  },
];

const storyParagraphs = [
  "They knew him on the corner as PHREN.",
  "A young bulldog from the 215 with a few dollars in his pocket, a head full of ideas, and absolutely no intention of staying broke.",
  "He learned the game early.",
  "Buy low. Sell high. Find an opportunity. Make the next move.",
  "Sneakers. Phones. Whatever was moving.",
  "It wasn’t about looking rich.",
  "It was about getting out.",
  "Then came the deal that was supposed to change everything.",
  "PHREN went all in.",
  "And got burned.",
  "The money was gone. The deal was gone. And the people who promised they had his back were gone too.",
  "For a minute, the whole thing looked finished.",
  "But PHREN wasn’t finished. Not even close.",
  "He looked at what was left, picked himself up, and went straight back to work.",
  "No excuses. No waiting. No looking for someone to blame.",
  "The bulldog had taken a hit — but he still had teeth.",
  "He had one thing left:",
  "Conviction.",
  "He was getting it back.",
  "And this time, he wasn’t stopping.",
  "One move became another. One win became the next.",
  "Every time life tried to put him back in his place, PHREN came back harder.",
  "That’s when people started paying attention.",
  "Because you can fake confidence.",
  "You can’t fake a comeback.",
  "People saw a bulldog who simply refused to stay down.",
  "And they wanted in.",
  "More bulldogs.",
  "More hustlers.",
  "More believers.",
  "People who weren’t looking for a shortcut.",
  "People ready to get after it by any hustle necessary.",
  "The corner became a squad.",
  "The squad became a movement.",
  "And PHREN became the one people wanted beside them when it was time to make a move.",
  "The hustle got bigger.",
  "The wins got bigger.",
  "The money got bigger.",
  "And eventually, that bulldog who started with almost nothing was looking down on Philadelphia from a penthouse.",
  "He made it.",
  "But here’s where the story gets interesting.",
  "PHREN never forgot the corner.",
  "He never forgot the people who stayed when there was nothing to gain.",
  "And he never forgot what it felt like to be the bulldog looking for his first break.",
  "So he went back.",
  "Not because he had to.",
  "Because he wanted to.",
  "This time, he wasn’t looking for his own way out.",
  "He was looking for the next squad to bring with him.",
  "And that’s where the real $PHREN story begins.",
  "The 215 gave him the mentality.",
  "The streets gave him the hustle.",
  "The setbacks gave him the bite.",
  "The squad gave him the power.",
  "Now he’s bringing all of it to the meme game.",
  "No corporate playbook.",
  "No waiting for permission.",
  "Just hustle, confidence, loyalty and a squad ready to run it up together.",
  "$PHREN already made the trip from the corner to the penthouse.",
  "Now he’s opening the door.",
  "Who’s coming up?",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpportunitiesOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-main">$PHREN</span>
          <span className="brand-number">215</span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <Link className="active" to="/" onClick={closeMenu}>
            HOME
          </Link>

          <Link to="/story" onClick={closeMenu}>
            STORY
          </Link>

          <Link to="/squad" onClick={closeMenu}>
            SQUAD
          </Link>

          <Link to="/movement" onClick={closeMenu}>
            MOVEMENT
          </Link>

          <Link to="/merch" onClick={closeMenu}>
            MERCH
          </Link>

          <Link to="/hustles" onClick={closeMenu}>
            HUSTLES
          </Link>

          <div className="nav-dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => setOpportunitiesOpen(!opportunitiesOpen)}
            >
              OPPORTUNITIES
              <span className="chevron">⌄</span>
            </button>

            <div
              className={`dropdown-menu ${
                opportunitiesOpen ? "dropdown-visible" : ""
              }`}
            >
              <Link to="/opportunities#current" onClick={closeMenu}>
                Current Opportunities
              </Link>

              <Link to="/opportunities#how-it-works" onClick={closeMenu}>
                How It Works
              </Link>

              <Link to="/opportunities#success-stories" onClick={closeMenu}>
                Success Stories
              </Link>

              <Link to="/opportunities#faq" onClick={closeMenu}>
                FAQ
              </Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu}>
            CONTACT
          </Link>

          <Link className="mobile-join" to="/squad" onClick={closeMenu}>
            JOIN THE SQUAD
          </Link>
        </nav>

        <div className="nav-actions">
          <button className="cart-button" aria-label="Shopping cart">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L20.5 8H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            <span>0</span>
          </button>

          <Link className="join-button" to="/squad">
            JOIN THE SQUAD
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-noise"></div>
          <div className="hero-glow"></div>

          <div className="hero-background-number">215</div>

          <div className="hero-content">
            <p className="eyebrow">
              <span></span>
              THE STORY OF $PHREN
            </p>

            <h1>
              FROM THE <span>215.</span>
              <br />
              BUILT IN THE <strong>GRIND.</strong>
              <br />
              BACK FOR THE <strong>SQUAD.</strong>
            </h1>

            <p className="hero-description">
              They knew him on the corner as PHREN.
              <br />
              A young bulldog from the 215 with a few dollars in his pocket,
              <br className="desktop-break" />a head full of ideas, and
              absolutely no intention of staying broke.
            </p>

            <div className="hero-buttons">
              <Link className="primary-button" to="/story">
                READ THE STORY
                <span>→</span>
              </Link>

              <Link className="secondary-button" to="/squad">
                JOIN THE SQUAD
                <span>→</span>
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>215</strong>
                <span>WHERE IT STARTED</span>
              </div>

              <div className="stat">
                <strong>∞</strong>
                <span>NO LIMITS</span>
              </div>

              <div className="stat">
                <strong>1</strong>
                <span>MINDSET</span>
              </div>

              <div className="stat">
                <strong className="people-icon">♟♟♟</strong>
                <span>ONE SQUAD</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="feature-grid section">
          <article className="feature-card mindset-card">
            <div>
              <p className="card-label">OUR MINDSET</p>

              <h2>
                BUY LOW. SELL HIGH.
                <br />
                FIND OPPORTUNITY.
                <br />
                MAKE THE NEXT <span>MOVE.</span>
              </h2>

              <p className="card-text">
                It’s not about looking rich.
                <br />
                It’s about getting out.
              </p>
            </div>

            <Link to="/hustles" className="card-button">
              OUR MINDSET <span>→</span>
            </Link>
          </article>

          <article className="feature-card movement-card">
            <div>
              <p className="card-label">JOIN THE MOVEMENT</p>

              <h2>
                THIS ISN’T JUST A BRAND.
                <br />
                IT’S A <span>BROTHERHOOD.</span>
              </h2>

              <ul className="check-list">
                <li>Hustle</li>
                <li>Confidence</li>
                <li>Loyalty</li>
                <li>The Squad</li>
              </ul>
            </div>

            <Link to="/movement" className="card-button">
              JOIN THE MOVEMENT <span>→</span>
            </Link>
          </article>

          <article className="feature-card squad-card">
            <div>
              <p className="card-label">THE SQUAD</p>

              <h2>
                ONE CORNER.
                <br />
                ONE SQUAD.
                <br />
                ONE <span>MOVEMENT.</span>
              </h2>

              <p className="card-text">
                More bulldogs.
                <br />
                More hustlers.
                <br />
                More believers.
              </p>
            </div>

            <Link to="/squad" className="card-button">
              MEET THE SQUAD <span>→</span>
            </Link>
          </article>

          <article className="feature-card merch-card">
            <div className="merch-placeholder">
              <div className="shirt">
                <span>$PHREN</span>
              </div>

              <div className="shirt shirt-small">
                <span>$PHREN</span>
              </div>
            </div>

            <div>
              <p className="card-label">$PHREN OG COLLECTION</p>

              <p className="card-text">
                Rep the movement. Built for the squad.
              </p>
            </div>

            <Link to="/merch" className="card-button">
              SHOP MERCH <span>→</span>
            </Link>
          </article>
        </section>

        {/* JOURNEY */}
        <section className="journey section" id="journey">
          <div className="section-heading">
            <p className="eyebrow">THE JOURNEY</p>

            <h2>
              FROM THE CORNER
              <br />
              <span>TO THE MOVEMENT.</span>
            </h2>
          </div>

          <div className="journey-line">
            {journey.map((item) => (
              <div className="journey-point" key={item.number}>
                <div className="point-dot"></div>

                <span className="point-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FULL STORY */}
        <section className="story-section section" id="story">
          <div className="story-intro">
            <p className="eyebrow">THE STORY OF $PHREN</p>

            <h2>
              YOU CAN FAKE
              <br />
              CONFIDENCE.
              <br />
              YOU CAN’T FAKE A <span>COMEBACK.</span>
            </h2>
          </div>

          <div className="story-copy">
            {storyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  paragraph === "Conviction." ||
                  paragraph === "He made it." ||
                  paragraph === "And got burned." ||
                  paragraph === "Who’s coming up?"
                    ? "story-highlight"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}

            <Link to="/squad" className="text-link">
              JOIN THE SQUAD <span>→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section section" id="join">
          <div className="cta-content">
            <p className="eyebrow">THE DOOR IS OPEN</p>

            <h2>
              PHREN MADE IT OUT.
              <br />
              <span>NOW WHO’S COMING UP?</span>
            </h2>

            <p>
              The 215 gave him the mentality.
              <br />
              The setbacks gave him the bite.
              <br />
              The squad gave him the power.
            </p>

            <Link to="/squad" className="primary-button">
              JOIN THE SQUAD <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span>$PHREN</span>
          <small>FROM THE 215. BUILT IN THE GRIND.</small>
        </div>

        <p>© 2026 $PHREN. BUILT FOR THE SQUAD.</p>

        <Link to="/">BACK TO TOP ↑</Link>
      </footer>
    </div>
  );
}

export default App;
