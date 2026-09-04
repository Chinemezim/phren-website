import { Link } from "react-router-dom";
import "./Opportunities.css";

const opportunities = [
  {
    number: "01",
    title: "BUILD WITH US",
    label: "CREATORS",
    text: "Got an idea, project, business, or creative skill? Bring it to the table. The movement is always looking for people building something real.",
  },
  {
    number: "02",
    title: "JOIN THE SQUAD",
    label: "COMMUNITY",
    text: "Connect with people who share the same mindset. Learn, collaborate, build relationships, and move forward together.",
  },
  {
    number: "03",
    title: "BRING AN IDEA",
    label: "PARTNERSHIPS",
    text: "Have an idea that could create something bigger? Tell us about it. The best opportunities often start with one conversation.",
  },
  {
    number: "04",
    title: "CREATE IMPACT",
    label: "THE MOVEMENT",
    text: "Making it out is only part of the mission. We want to create opportunities that help the next person make their own move.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "SHOW UP",
    text: "Introduce yourself and tell us what you are building, creating, or looking to contribute.",
  },
  {
    number: "02",
    title: "START THE CONVERSATION",
    text: "Good opportunities begin with people connecting. Ask questions, share your idea, and find your lane.",
  },
  {
    number: "03",
    title: "MAKE THE MOVE",
    text: "Once the right opportunity appears, don't overthink it. Take action and put your work behind it.",
  },
  {
    number: "04",
    title: "BUILD TOGETHER",
    text: "The goal is bigger than one person. Build relationships, create value, and bring other people up with you.",
  },
];

const faqs = [
  {
    question: "WHAT IS $PHREN?",
    answer:
      "$PHREN is a brand and movement built around hustle, conviction, loyalty, ambition, and creating opportunities for the next squad.",
  },
  {
    question: "WHO CAN JOIN THE SQUAD?",
    answer:
      "Anybody who connects with the mindset can be part of the community. You don't need a perfect background or a perfect story. You just need the willingness to make your next move.",
  },
  {
    question: "DO I NEED TO BE FROM PHILLY?",
    answer:
      "No. The 215 is where the story comes from, but the mindset can travel anywhere. The movement is for people everywhere who understand the grind.",
  },
  {
    question: "CAN I SUBMIT A BUSINESS OR PROJECT?",
    answer:
      "Yes. If you are building something and want to explore collaboration, partnership, or support, reach out through the contact section.",
  },
  {
    question: "IS $PHREN JUST ABOUT MONEY?",
    answer:
      "No. Money can be part of the journey, but the bigger idea is the mindset behind it: building, learning, taking hits, getting back up, and bringing your people with you.",
  },
];

function Opportunities() {
  return (
    <div className="opportunities-page">
      <nav className="opportunities-nav">
        <Link to="/" className="opportunities-logo">
          $PHREN <span>215</span>
        </Link>

        <div className="opportunities-nav-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <a href="#faq">FAQ</a>
          <Link to="/contact">CONTACT</Link>
        </div>

        <Link to="/squad" className="opportunities-nav-button">
          JOIN THE SQUAD
        </Link>
      </nav>

      <main>
        <section className="opportunities-hero">
          <div className="opportunities-hero-grid"></div>

          <div className="opportunities-hero-content">
            <p className="opportunities-eyebrow">THE $PHREN OPPORTUNITIES</p>

            <h1>
              THE DOOR
              <br />
              <span>IS OPEN.</span>
            </h1>

            <p className="opportunities-hero-text">
              Opportunities don't always look like opportunities. Sometimes they
              look like an idea, a conversation, a connection, or one decision
              to finally make your move.
            </p>

            <div className="opportunities-hero-actions">
              <a href="#current" className="opportunities-button">
                SEE OPPORTUNITIES
              </a>

              <Link to="/squad" className="opportunities-outline-button">
                JOIN THE SQUAD
              </Link>
            </div>
          </div>

          <div className="opportunities-hero-number">215</div>

          <div className="opportunities-hero-bottom">
            <span>FROM THE 215</span>
            <span>BUILT IN THE GRIND</span>
            <span>OPEN FOR THE SQUAD</span>
          </div>
        </section>

        <section className="opportunities-intro" id="current">
          <div className="opportunities-section-label">
            <span>01</span> CURRENT OPPORTUNITIES
          </div>

          <div className="opportunities-intro-content">
            <h2>
              FIND YOUR
              <br />
              <span>OPENING.</span>
            </h2>

            <div className="opportunities-intro-copy">
              <p>
                The next move can come from anywhere. A new skill. A business
                idea. A collaboration. A conversation with the right person.
              </p>

              <p>
                $PHREN is building a space where people can connect around
                ideas, opportunities, and the work it takes to turn those ideas
                into something real.
              </p>

              <p className="opportunities-bold">
                DON'T WAIT FOR THE DOOR. FIND THE OPENING.
              </p>
            </div>
          </div>

          <div className="opportunities-card-grid">
            {opportunities.map((opportunity) => (
              <article className="opportunity-card" key={opportunity.number}>
                <div className="opportunity-card-top">
                  <span>{opportunity.number}</span>
                  <span>↗</span>
                </div>

                <div className="opportunity-card-line"></div>

                <p className="opportunity-card-label">{opportunity.label}</p>

                <h3>{opportunity.title}</h3>

                <p className="opportunity-card-text">{opportunity.text}</p>

                <Link to="/contact" className="opportunity-card-link">
                  LEARN MORE <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="opportunities-manifesto">
          <div className="opportunities-manifesto-bg">OPPORTUNITY</div>

          <div className="opportunities-manifesto-content">
            <p className="opportunities-eyebrow">THE MINDSET</p>

            <h2>
              DON'T WAIT
              <br />
              <span>TO BE CHOSEN.</span>
            </h2>

            <p>
              Sometimes the opportunity is not sitting in front of you.
              Sometimes you have to build the thing that creates it.
            </p>
          </div>
        </section>

        <section className="opportunities-process">
          <div className="opportunities-section-label">
            <span>02</span> HOW IT WORKS
          </div>

          <div className="opportunities-process-header">
            <h2>
              FROM IDEA
              <br />
              <span>TO ACTION.</span>
            </h2>

            <p>
              There is no complicated formula. Show up, connect with people,
              make the move, and keep building.
            </p>
          </div>

          <div className="opportunities-steps">
            {processSteps.map((step) => (
              <article className="opportunities-step" key={step.number}>
                <div className="opportunities-step-number">{step.number}</div>

                <div className="opportunities-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <div className="opportunities-step-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="opportunities-stories">
          <div className="opportunities-section-label">
            <span>03</span> SUCCESS STORIES
          </div>

          <div className="opportunities-stories-header">
            <h2>
              BUILT FROM
              <br />
              <span>THE GRIND.</span>
            </h2>

            <p>
              Every big move starts somewhere. These are the kinds of stories
              the movement is built to celebrate.
            </p>
          </div>

          <div className="success-story-grid">
            <article className="success-story-card">
              <span>01</span>
              <h3>STARTED WITH NOTHING.</h3>
              <p>
                One idea. One person willing to work. One decision to stop
                waiting and start building.
              </p>
            </article>

            <article className="success-story-card">
              <span>02</span>
              <h3>TURNED A SKILL INTO A HUSTLE.</h3>
              <p>
                What started as something learned for fun became something
                capable of creating real opportunity.
              </p>
            </article>

            <article className="success-story-card">
              <span>03</span>
              <h3>BROUGHT THE SQUAD UP.</h3>
              <p>
                The biggest win isn't always making it first. Sometimes it's
                opening the door for somebody else.
              </p>
            </article>
          </div>
        </section>

        <section className="opportunities-faq" id="faq">
          <div className="opportunities-section-label">
            <span>04</span> FAQ
          </div>

          <div className="opportunities-faq-header">
            <h2>
              QUESTIONS?
              <br />
              <span>WE GOT YOU.</span>
            </h2>

            <p>Everything starts with understanding the mission.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={index}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus">+</span>
                </summary>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="opportunities-cta" id="contact">
          <p className="opportunities-eyebrow">THE NEXT MOVE</p>

          <h2>
            YOUR MOVE.
            <br />
            <span>YOUR MOMENT.</span>
          </h2>

          <p>
            The door is open. Bring your idea, your hustle, or simply your
            ambition. The next chapter starts when you decide to move.
          </p>

          <div className="opportunities-cta-actions">
            <Link to="/squad" className="opportunities-cta-button">
              JOIN THE SQUAD
            </Link>

            <Link to="/hustles" className="opportunities-cta-outline">
              FIND YOUR HUSTLE
            </Link>
          </div>
        </section>
      </main>

      <footer className="opportunities-footer">
        <div className="opportunities-footer-brand">
          <Link to="/" className="opportunities-logo">
            $PHREN <span>215</span>
          </Link>

          <p>FROM THE 215. BUILT IN THE GRIND. BACK FOR THE SQUAD.</p>
        </div>

        <div className="opportunities-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/opportunities">OPPORTUNITIES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="opportunities-footer-bottom">
          <span>© 2026 $PHREN 215</span>
          <span>#PHILLYTHING</span>
        </div>
      </footer>
    </div>
  );
}

export default Opportunities;
