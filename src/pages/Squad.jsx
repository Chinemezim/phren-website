import { Link } from "react-router-dom";
import "./Squad.css";

const squadValues = [
  {
    number: "01",
    title: "LOYALTY",
    text: "We move together. We win together. The squad comes first.",
  },
  {
    number: "02",
    title: "HUSTLE",
    text: "No waiting for permission. Find the opportunity and make the move.",
  },
  {
    number: "03",
    title: "CONVICTION",
    text: "You can take a hit and still come back harder. Never stay down.",
  },
  {
    number: "04",
    title: "MOVEMENT",
    text: "One bulldog becomes a squad. One squad becomes a movement.",
  },
];

const squadStats = [
  { value: "215", label: "THE CODE" },
  { value: "∞", label: "THE HUSTLE" },
  { value: "1", label: "THE SQUAD" },
];

function Squad() {
  return (
    <div className="squad-page">
      {/* NAVIGATION */}
      <header className="squad-nav">
        <Link to="/" className="squad-logo">
          $PHREN <span>215</span>
        </Link>

        <nav className="squad-nav-links">
          <Link to="/">HOME</Link>
          <a href="/#story">STORY</a>
          <Link to="/squad" className="active">
            SQUAD
          </Link>
          <a href="/#movement">MOVEMENT</a>
          <a href="/#merch">MERCH</a>
          <a href="/#hustles">HUSTLES</a>
        </nav>

        <Link to="/#join" className="squad-nav-button">
          JOIN THE SQUAD
        </Link>
      </header>

      {/* HERO */}
      <section className="squad-hero">
        <div className="squad-hero-bg">SQUAD</div>

        <div className="squad-hero-content">
          <p className="squad-eyebrow">THE $PHREN MOVEMENT</p>

          <h1>
            MORE
            <br />
            <span>BULLDOGS.</span>
            <br />
            ONE SQUAD.
          </h1>

          <p className="squad-hero-text">
            PHREN made the trip from the corner to the penthouse. Now the door
            is open. The next move is yours.
          </p>

          <div className="squad-hero-actions">
            <a href="#join" className="squad-primary-btn">
              JOIN THE SQUAD
            </a>

            <a href="#values" className="squad-secondary-btn">
              WHAT WE STAND FOR
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="squad-stats">
        {squadStats.map((stat) => (
          <div className="squad-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* INTRO */}
      <section className="squad-intro">
        <div className="squad-section-label">01 / THE SQUAD</div>

        <div className="squad-intro-grid">
          <h2>
            YOU DON'T
            <br />
            HAVE TO
            <br />
            <span>RUN ALONE.</span>
          </h2>

          <div className="squad-intro-copy">
            <p>The corner became a squad. The squad became a movement.</p>

            <p>
              $PHREN isn't about one person making it out. It's about bringing
              the people who believed along for the ride.
            </p>

            <p>
              If you've got hustle, conviction and the mentality to keep moving
              when things get hard, there's a place for you here.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="squad-values" id="values">
        <div className="squad-section-label">02 / THE CODE</div>

        <div className="squad-values-heading">
          <h2>THIS IS THE CODE.</h2>
          <p>NO SHORTCUTS. NO EXCUSES.</p>
        </div>

        <div className="squad-values-grid">
          {squadValues.map((item) => (
            <article className="squad-value-card" key={item.number}>
              <span className="squad-value-number">{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MOVEMENT */}
      <section className="squad-movement" id="movement">
        <div className="squad-movement-bg">215</div>

        <div className="squad-movement-content">
          <p className="squad-eyebrow">FROM THE 215</p>

          <h2>
            WHO'S
            <br />
            <span>COMING UP?</span>
          </h2>

          <p>
            Every big movement starts with people willing to believe before
            everyone else does.
          </p>

          <p>
            The squad is bigger than a name. Bigger than a coin. Bigger than one
            bulldog.
          </p>

          <strong>IT'S TIME TO RUN IT UP TOGETHER.</strong>
        </div>
      </section>

      {/* JOIN */}
      <section className="squad-join" id="join">
        <div className="squad-join-inner">
          <p className="squad-eyebrow">THE DOOR IS OPEN</p>

          <h2>
            READY TO
            <br />
            <span>RUN IT UP?</span>
          </h2>

          <p className="squad-join-text">
            Bring the hustle. Bring the conviction. Bring the energy. The squad
            is waiting.
          </p>

          <a href="#top" className="squad-primary-btn">
            I'M IN
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="squad-footer">
        <div className="squad-footer-logo">
          $PHREN <span>215</span>
        </div>

        <p>FROM THE 215. BUILT IN THE GRIND. BACK FOR THE SQUAD.</p>

        <div className="squad-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/squad">SQUAD</Link>
          <a href="/#story">STORY</a>
          <a href="/#contact">CONTACT</a>
        </div>

        <small>© 2026 $PHREN. ALL RIGHTS RESERVED.</small>
      </footer>
    </div>
  );
}

export default Squad;
