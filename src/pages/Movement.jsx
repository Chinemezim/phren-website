import { Link } from "react-router-dom";
import "./Movement.css";

const movementValues = [
  {
    number: "01",
    title: "HUSTLE",
    text: "We don't wait for opportunities. We find them, create them, and make the next move.",
  },
  {
    number: "02",
    title: "CONVICTION",
    text: "When everything goes wrong, we don't fold. We take the hit, get back up, and keep moving.",
  },
  {
    number: "03",
    title: "LOYALTY",
    text: "Remember who stayed when there was nothing to gain. The squad moves together.",
  },
  {
    number: "04",
    title: "AMBITION",
    text: "The corner was never the destination. We are building toward something bigger.",
  },
];

const movementSteps = [
  {
    number: "01",
    title: "FIND YOUR GRIND",
    text: "Everybody has something they are building. A business, a skill, a dream, a comeback. Start there.",
  },
  {
    number: "02",
    title: "MAKE THE MOVE",
    text: "Ideas mean nothing without action. Take the opportunity. Learn the game. Make the next move.",
  },
  {
    number: "03",
    title: "BUILD YOUR SQUAD",
    text: "You don't have to run alone. Find people who believe, people who hustle, and people who refuse to stay down.",
  },
  {
    number: "04",
    title: "BRING THEM UP",
    text: "Making it out is only part of the story. The real movement is opening the door for the next person.",
  },
];

function Movement() {
  return (
    <div className="movement-page">
      <nav className="movement-nav">
        <Link to="/" className="movement-logo">
          $PHREN <span>215</span>
        </Link>

        <div className="movement-nav-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement" className="active">
            MOVEMENT
          </Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <Link to="/squad" className="movement-nav-button">
          JOIN THE SQUAD
        </Link>
      </nav>

      <main>
        <section className="movement-hero">
          <div className="movement-hero-grid"></div>

          <div className="movement-hero-content">
            <p className="movement-eyebrow">THE $PHREN MOVEMENT</p>

            <h1>
              MORE THAN A
              <br />
              <span>MONEY PLAY.</span>
            </h1>

            <p className="movement-hero-text">
              $PHREN is a mindset. A movement built for people who have taken
              hits, learned the game, and decided they are not staying down.
            </p>

            <div className="movement-hero-actions">
              <a href="#why" className="movement-button">
                ENTER THE MOVEMENT
              </a>

              <Link to="/squad" className="movement-outline-button">
                MEET THE SQUAD
              </Link>
            </div>
          </div>

          <div className="movement-hero-number">215</div>

          <div className="movement-hero-bottom">
            <span>FROM THE 215</span>
            <span>BUILT IN THE GRIND</span>
            <span>BACK FOR THE SQUAD</span>
          </div>
        </section>

        <section className="movement-intro" id="why">
          <div className="movement-section-label">
            <span>01</span> WHY $PHREN
          </div>

          <div className="movement-intro-content">
            <h2>
              THIS ISN'T
              <br />
              <span>JUST A COIN.</span>
            </h2>

            <div className="movement-intro-copy">
              <p>
                The story started on the corner. A young bulldog from the 215
                with a few dollars, a head full of ideas, and absolutely no
                intention of staying broke.
              </p>

              <p>
                He took a loss. Got burned. Lost the money. Lost the deal. Lost
                the people who said they had his back.
              </p>

              <p className="movement-bold">
                But he didn't lose his conviction.
              </p>

              <p>
                That's the mentality behind $PHREN. Not pretending the grind is
                easy. Not waiting for somebody to save you. Getting back up,
                making the next move, and bringing your people with you.
              </p>
            </div>
          </div>
        </section>

        <section className="movement-values">
          <div className="movement-section-label">
            <span>02</span> THE CODE
          </div>

          <div className="movement-values-header">
            <h2>
              THE CODE
              <br />
              <span>WE LIVE BY.</span>
            </h2>

            <p>
              Four things built the movement. Four things keep the squad moving
              forward.
            </p>
          </div>

          <div className="movement-values-grid">
            {movementValues.map((value) => (
              <article className="movement-value-card" key={value.number}>
                <span className="movement-card-number">{value.number}</span>

                <div className="movement-card-line"></div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="movement-manifesto">
          <div className="movement-manifesto-bg">GRIND</div>

          <div className="movement-manifesto-content">
            <p className="movement-eyebrow">THE MANIFESTO</p>

            <h2>
              NO SHORTCUTS.
              <br />
              <span>NO PERMISSION.</span>
              <br />
              NO LOOKING BACK.
            </h2>

            <p>
              We know where we came from. We know what it took to get here. And
              we know there is another level waiting.
            </p>
          </div>
        </section>

        <section className="movement-how" id="hustles">
          <div className="movement-section-label">
            <span>03</span> HOW WE MOVE
          </div>

          <div className="movement-how-header">
            <h2>
              MAKE YOUR
              <br />
              <span>NEXT MOVE.</span>
            </h2>

            <p>
              The movement isn't about watching from the sidelines. It's about
              getting involved and building something of your own.
            </p>
          </div>

          <div className="movement-steps">
            {movementSteps.map((step) => (
              <article className="movement-step" key={step.number}>
                <span>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <div className="movement-step-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="movement-squad">
          <div className="movement-squad-content">
            <p className="movement-eyebrow">THE SQUAD</p>

            <h2>
              ONE MINDSET.
              <br />
              <span>ONE MOVEMENT.</span>
            </h2>

            <p>
              More bulldogs. More hustlers. More believers. People who aren't
              looking for a shortcut. People ready to get after it by any hustle
              necessary.
            </p>

            <Link to="/squad" className="movement-button">
              MEET THE SQUAD
            </Link>
          </div>

          <div className="movement-squad-side">
            <div className="movement-squad-big">215</div>
            <span>PHILLY THING</span>
          </div>
        </section>

        <section className="movement-cta" id="contact">
          <p className="movement-eyebrow">THE DOOR IS OPEN</p>

          <h2>
            WHO'S
            <br />
            <span>COMING UP?</span>
          </h2>

          <p>PHREN made it out. Now the door is open for the next squad.</p>

          <Link to="/squad" className="movement-cta-button">
            JOIN THE MOVEMENT
          </Link>
        </section>
      </main>

      <footer className="movement-footer">
        <div className="movement-footer-brand">
          <Link to="/" className="movement-logo">
            $PHREN <span>215</span>
          </Link>

          <p>FROM THE 215. BUILT IN THE GRIND. BACK FOR THE SQUAD.</p>
        </div>

        <div className="movement-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/opportunities">OPPORTUNITIES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="movement-footer-bottom">
          <span>© 2026 $PHREN 215</span>
          <span>#PHILLYTHING</span>
        </div>
      </footer>
    </div>
  );
}

export default Movement;
