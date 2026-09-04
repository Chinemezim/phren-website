import { Link } from "react-router-dom";
import "./Hustles.css";

const hustleCards = [
  {
    number: "01",
    title: "BUILD",
    label: "START SOMETHING",
    text: "Turn the idea in your head into something real. A business, a skill, a product, a service. Start with what you have and build from there.",
  },
  {
    number: "02",
    title: "GRIND",
    label: "STAY CONSISTENT",
    text: "The first move gets attention. The daily work creates results. Keep showing up when nobody is watching.",
  },
  {
    number: "03",
    title: "LEARN",
    label: "KNOW THE GAME",
    text: "Nobody starts knowing everything. Learn from the losses, study the people ahead of you, and keep sharpening your game.",
  },
  {
    number: "04",
    title: "SCALE",
    label: "GO TO THE NEXT LEVEL",
    text: "Once you have momentum, don't stop there. Improve the system, build the team, and turn the hustle into something bigger.",
  },
];

const hustleSteps = [
  {
    number: "01",
    title: "FIND YOUR LANE",
    text: "Figure out what you are good at, what you enjoy, and where you can create value.",
  },
  {
    number: "02",
    title: "START SMALL",
    text: "You don't need everything figured out. Start with what is available and make the first move.",
  },
  {
    number: "03",
    title: "STAY IN THE GAME",
    text: "Every hustle has slow days. Keep learning, keep improving, and don't let one setback define you.",
  },
  {
    number: "04",
    title: "BRING YOUR PEOPLE",
    text: "The goal isn't just to make it yourself. Create opportunities and bring the squad with you.",
  },
];

function Hustles() {
  return (
    <div className="hustles-page">
      <nav className="hustles-nav">
        <Link to="/" className="hustles-logo">
          $PHREN <span>215</span>
        </Link>

        <div className="hustles-nav-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles" className="active">
            HUSTLES
          </Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <Link to="/squad" className="hustles-nav-button">
          JOIN THE SQUAD
        </Link>
      </nav>

      <main>
        {/* HERO */}
        <section className="hustles-hero">
          <div className="hustles-hero-grid"></div>

          <div className="hustles-hero-content">
            <p className="hustles-eyebrow">THE $PHREN HUSTLE</p>

            <h1>
              MAKE
              <br />
              <span>YOUR MOVE.</span>
            </h1>

            <p className="hustles-hero-text">
              Everybody has a hustle. The difference is what you do with it.
              Build something, learn the game, and turn your next move into your
              next level.
            </p>

            <div className="hustles-hero-actions">
              <a href="#hustles" className="hustles-button">
                FIND YOUR HUSTLE
              </a>

              <Link to="/movement" className="hustles-outline-button">
                THE MOVEMENT
              </Link>
            </div>
          </div>

          <div className="hustles-hero-number">215</div>

          <div className="hustles-hero-bottom">
            <span>FROM THE 215</span>
            <span>BUILT IN THE GRIND</span>
            <span>MAKE THE NEXT MOVE</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="hustles-intro">
          <div className="hustles-section-label">
            <span>01</span> THE HUSTLE
          </div>

          <div className="hustles-intro-content">
            <h2>
              YOUR HUSTLE.
              <br />
              <span>YOUR GAME.</span>
            </h2>

            <div className="hustles-intro-copy">
              <p>
                There is no single definition of a hustle. It can be a business
                you are building after work, a skill you are learning late at
                night, a product you are creating, or simply refusing to settle
                for less.
              </p>

              <p>
                $PHREN is about that mentality. Find something worth building,
                put the work behind it, and keep moving when things don't go
                according to plan.
              </p>

              <p className="hustles-bold">
                THE GRIND DOESN'T HAVE TO LOOK THE SAME FOR EVERYBODY.
              </p>
            </div>
          </div>
        </section>

        {/* HUSTLE CARDS */}
        <section className="hustles-cards-section" id="hustles">
          <div className="hustles-section-label">
            <span>02</span> THE PLAYBOOK
          </div>

          <div className="hustles-cards-header">
            <h2>
              BUILD IT.
              <br />
              <span>WORK IT.</span>
            </h2>

            <p>
              Four principles for anybody trying to turn an idea into something
              real.
            </p>
          </div>

          <div className="hustles-card-grid">
            {hustleCards.map((card) => (
              <article className="hustle-card" key={card.number}>
                <div className="hustle-card-top">
                  <span>{card.number}</span>
                  <span>↗</span>
                </div>

                <div className="hustle-card-line"></div>

                <p className="hustle-card-label">{card.label}</p>

                <h3>{card.title}</h3>

                <p className="hustle-card-text">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="hustles-manifesto">
          <div className="hustles-manifesto-bg">HUSTLE</div>

          <div className="hustles-manifesto-content">
            <p className="hustles-eyebrow">THE RULE</p>

            <h2>
              DON'T WAIT
              <br />
              <span>FOR PERMISSION.</span>
            </h2>

            <p>
              Nobody is coming to hand you the perfect opportunity. Learn to
              recognize the opening, make the move, and create your own lane.
            </p>
          </div>
        </section>

        {/* HOW TO HUSTLE */}
        <section className="hustles-how">
          <div className="hustles-section-label">
            <span>03</span> HOW TO HUSTLE
          </div>

          <div className="hustles-how-header">
            <h2>
              FROM IDEA
              <br />
              <span>TO MOTION.</span>
            </h2>

            <p>
              You don't need a perfect plan. You need a direction, a reason, and
              the discipline to keep moving.
            </p>
          </div>

          <div className="hustles-steps">
            {hustleSteps.map((step) => (
              <article className="hustle-step" key={step.number}>
                <div className="hustle-step-number">{step.number}</div>

                <div className="hustle-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <div className="hustle-step-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        {/* OPPORTUNITY */}
        <section className="hustles-opportunity">
          <div className="hustles-opportunity-content">
            <p className="hustles-eyebrow">THE OPPORTUNITY</p>

            <h2>
              TURN THE
              <br />
              <span>HUSTLE UP.</span>
            </h2>

            <p>
              The next level starts when you stop waiting and start building.
              Whatever your lane, whatever your background, whatever your
              starting point — make the next move.
            </p>

            <Link to="/movement" className="hustles-button">
              ENTER THE MOVEMENT
            </Link>
          </div>

          <div className="hustles-opportunity-side">
            <div>215</div>
            <span>THE CITY THAT BUILT THE MINDSET</span>
          </div>
        </section>

        {/* CTA */}
        <section className="hustles-cta" id="contact">
          <p className="hustles-eyebrow">NO EXCUSES</p>

          <h2>
            WHAT'S
            <br />
            <span>YOUR HUSTLE?</span>
          </h2>

          <p>PHREN made the move. Now it's your turn to build something.</p>

          <Link to="/squad" className="hustles-cta-button">
            JOIN THE SQUAD
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="hustles-footer">
        <div className="hustles-footer-brand">
          <Link to="/" className="hustles-logo">
            $PHREN <span>215</span>
          </Link>

          <p>FROM THE 215. BUILT IN THE GRIND. BACK FOR THE SQUAD.</p>
        </div>

        <div className="hustles-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
        </div>

        <div className="hustles-footer-bottom">
          <span>© 2026 $PHREN 215</span>
          <span>#PHILLYTHING</span>
        </div>
      </footer>
    </div>
  );
}

export default Hustles;
