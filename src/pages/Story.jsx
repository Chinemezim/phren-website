import { Link } from "react-router-dom";
import "./Story.css";

const storyChapters = [
  {
    number: "01",
    title: "THE COME UP",
    text: "They knew him on the corner as PHREN. A young bulldog from the 215 with a few dollars in his pocket, a head full of ideas, and absolutely no intention of staying broke.",
  },
  {
    number: "02",
    title: "THE SETBACK",
    text: "Then came the deal that was supposed to change everything. PHREN went all in. And got burned. The money was gone. The deal was gone. And the people who promised they had his back were gone too.",
  },
  {
    number: "03",
    title: "THE COMEBACK",
    text: "But PHREN wasn't finished. Not even close. He looked at what was left, picked himself up, and went straight back to work. No excuses. No waiting. No looking for someone to blame.",
  },
  {
    number: "04",
    title: "THE SQUAD",
    text: "People saw a bulldog who simply refused to stay down. And they wanted in. More bulldogs. More hustlers. More believers. The corner became a squad. The squad became a movement.",
  },
  {
    number: "05",
    title: "THE PENTHOUSE",
    text: "The hustle got bigger. The wins got bigger. The money got bigger. And eventually, that bulldog who started with almost nothing was looking down on Philadelphia from a penthouse. He made it.",
  },
  {
    number: "06",
    title: "BACK FOR THE SQUAD",
    text: "PHREN never forgot the corner. He never forgot the people who stayed when there was nothing to gain. This time, he wasn't looking for his own way out. He was looking for the next squad to bring with him.",
  },
];

function Story() {
  return (
    <div className="story-page">
      {/* NAVIGATION */}
      <header className="story-nav">
        <Link to="/" className="story-logo">
          $PHREN <span>215</span>
        </Link>

        <nav className="story-nav-links">
          <Link to="/">HOME</Link>
          <Link to="/story" className="active">
            STORY
          </Link>
          <Link to="/squad">SQUAD</Link>
          <a href="/#movement">MOVEMENT</a>
          <a href="/#merch">MERCH</a>
          <a href="/#hustles">HUSTLES</a>
        </nav>

        <Link to="/#join" className="story-nav-button">
          JOIN THE SQUAD
        </Link>
      </header>

      {/* HERO */}
      <section className="story-hero">
        <div className="story-hero-number">215</div>

        <div className="story-hero-content">
          <p className="story-eyebrow">THE STORY OF $PHREN</p>

          <h1>
            FROM THE
            <br />
            <span>215.</span>
            <br />
            TO THE
            <br />
            <span>PENTHOUSE.</span>
          </h1>

          <p className="story-hero-text">
            A story about hustle, setbacks, conviction, and a bulldog who
            refused to stay down.
          </p>

          <a href="#begin" className="story-scroll">
            <span>READ THE STORY</span>
            <strong>↓</strong>
          </a>
        </div>
      </section>

      {/* OPENING */}
      <section className="story-opening" id="begin">
        <div className="story-label">THE BEGINNING</div>

        <div className="story-opening-grid">
          <h2>
            THEY KNEW HIM
            <br />
            ON THE CORNER
            <br />
            AS <span>PHREN.</span>
          </h2>

          <div className="story-opening-copy">
            <p>
              A young bulldog from the 215 with a few dollars in his pocket, a
              head full of ideas, and absolutely no intention of staying broke.
            </p>

            <p>He learned the game early.</p>

            <div className="story-rules">
              <span>BUY LOW.</span>
              <span>SELL HIGH.</span>
              <span>MAKE THE NEXT MOVE.</span>
            </div>

            <p>Sneakers. Phones. Whatever was moving.</p>

            <p>
              It wasn't about looking rich.
              <br />
              It was about getting out.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="story-chapters">
        <div className="story-label">THE JOURNEY</div>

        <div className="story-chapter-list">
          {storyChapters.map((chapter) => (
            <article className="story-chapter" key={chapter.number}>
              <div className="story-chapter-number">{chapter.number}</div>

              <div className="story-chapter-content">
                <h2>{chapter.title}</h2>
                <p>{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONVICTION */}
      <section className="story-conviction">
        <div className="story-conviction-bg">BITE</div>

        <div className="story-conviction-content">
          <p className="story-eyebrow">THE ONE THING LEFT</p>

          <h2>
            <span>CONVICTION.</span>
          </h2>

          <p>The bulldog had taken a hit — but he still had teeth.</p>

          <p>He had one thing left:</p>

          <strong>CONVICTION.</strong>

          <p>
            He was getting it back.
            <br />
            And this time, he wasn't stopping.
          </p>
        </div>
      </section>

      {/* COMEBACK */}
      <section className="story-comeback">
        <div className="story-label">THE COMEBACK</div>

        <div className="story-comeback-grid">
          <div>
            <h2>
              HE
              <br />
              <span>MADE IT.</span>
            </h2>
          </div>

          <div className="story-comeback-copy">
            <p>
              One move became another.
              <br />
              One win became the next.
            </p>

            <p>
              Every time life tried to put him back in his place, PHREN came
              back harder.
            </p>

            <p className="story-big-line">
              YOU CAN FAKE CONFIDENCE.
              <br />
              YOU CAN'T FAKE A COMEBACK.
            </p>

            <p>
              People saw a bulldog who simply refused to stay down. And they
              wanted in.
            </p>
          </div>
        </div>
      </section>

      {/* SQUAD */}
      <section className="story-squad">
        <div className="story-squad-bg">SQUAD</div>

        <div className="story-squad-content">
          <p className="story-eyebrow">THE MOVEMENT</p>

          <h2>
            THE CORNER
            <br />
            BECAME A
            <br />
            <span>SQUAD.</span>
          </h2>

          <p>More bulldogs. More hustlers. More believers.</p>

          <p>
            People who weren't looking for a shortcut. People ready to get after
            it by any hustle necessary.
          </p>

          <Link to="/squad" className="story-primary-btn">
            MEET THE SQUAD
          </Link>
        </div>
      </section>

      {/* PHILLY TO PENTHOUSE */}
      <section className="story-penthouse">
        <div className="story-penthouse-top">
          <span>THE 215</span>
          <span>THE GRIND</span>
          <span>THE PENTHOUSE</span>
        </div>

        <div className="story-penthouse-content">
          <p>
            The hustle got bigger.
            <br />
            The wins got bigger.
            <br />
            The money got bigger.
          </p>

          <h2>
            HE
            <br />
            <span>MADE IT.</span>
          </h2>

          <p>
            And eventually, that bulldog who started with almost nothing was
            looking down on Philadelphia from a penthouse.
          </p>
        </div>
      </section>

      {/* RETURN */}
      <section className="story-return">
        <div className="story-label">BUT THE STORY DIDN'T END THERE</div>

        <div className="story-return-grid">
          <h2>
            BACK
            <br />
            FOR THE
            <br />
            <span>SQUAD.</span>
          </h2>

          <div className="story-return-copy">
            <p>PHREN never forgot the corner.</p>

            <p>
              He never forgot the people who stayed when there was nothing to
              gain.
            </p>

            <p>
              And he never forgot what it felt like to be the bulldog looking
              for his first break.
            </p>

            <p className="story-highlight">
              So he went back.
              <br />
              Not because he had to.
              <br />
              Because he wanted to.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL STORY */}
      <section className="story-final">
        <div className="story-final-content">
          <p className="story-eyebrow">THE REAL STORY BEGINS NOW</p>

          <h2>
            WHO'S
            <br />
            <span>COMING UP?</span>
          </h2>

          <p>
            The 215 gave him the mentality.
            <br />
            The streets gave him the hustle.
            <br />
            The setbacks gave him the bite.
            <br />
            The squad gave him the power.
          </p>

          <p>Now he's bringing all of it to the meme game.</p>

          <strong>
            NO CORPORATE PLAYBOOK.
            <br />
            NO WAITING FOR PERMISSION.
            <br />
            JUST HUSTLE.
          </strong>
        </div>
      </section>

      {/* CTA */}
      <section className="story-cta" id="join">
        <p className="story-eyebrow">FROM THE 215</p>

        <h2>
          $PHREN
          <br />
          <span>MADE IT OUT.</span>
        </h2>

        <p>
          Now he's opening the door.
          <br />
          Who's coming up?
        </p>

        <div className="story-cta-actions">
          <Link to="/squad" className="story-cta-button dark">
            JOIN THE SQUAD
          </Link>

          <Link to="/" className="story-cta-button outline">
            BACK HOME
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="story-footer">
        <div className="story-footer-logo">
          $PHREN <span>215</span>
        </div>

        <p>FROM THE 215. BUILT IN THE GRIND. BACK FOR THE SQUAD.</p>

        <div className="story-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <a href="/#contact">CONTACT</a>
        </div>

        <small>© 2026 $PHREN. ALL RIGHTS RESERVED.</small>
      </footer>
    </div>
  );
}

export default Story;
