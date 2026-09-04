import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/mwlkqkpb";

function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <Link to="/" className="contact-logo">
          $PHREN <span>215</span>
        </Link>

        <div className="contact-nav-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/opportunities">OPPORTUNITIES</Link>
          <Link to="/contact" className="active">
            CONTACT
          </Link>
        </div>

        <Link to="/squad" className="contact-nav-button">
          JOIN THE SQUAD
        </Link>
      </nav>

      <main>
        <section className="contact-hero">
          <div className="contact-hero-grid"></div>

          <div className="contact-hero-content">
            <p className="contact-eyebrow">THE $PHREN CONNECTION</p>

            <h1>
              LET&apos;S
              <br />
              <span>TALK.</span>
            </h1>

            <p className="contact-hero-text">
              Got an idea? Want to build with the squad? Have a question,
              collaboration, or opportunity? Open the conversation and make the
              next move.
            </p>

            <div className="contact-hero-actions">
              <a href="#contact-form" className="contact-button">
                SEND A MESSAGE
              </a>

              <Link to="/squad" className="contact-outline-button">
                JOIN THE SQUAD
              </Link>
            </div>
          </div>

          <div className="contact-hero-number">215</div>

          <div className="contact-hero-bottom">
            <span>FROM THE 215</span>
            <span>BUILT IN THE GRIND</span>
            <span>OPEN FOR THE SQUAD</span>
          </div>
        </section>

        <section className="contact-main" id="contact-form">
          <div className="contact-section-label">
            <span>01</span> GET IN TOUCH
          </div>

          <div className="contact-main-grid">
            <div className="contact-info">
              <h2>
                MAKE THE
                <br />
                <span>CONNECTION.</span>
              </h2>

              <p>
                Every movement starts with a conversation. Whether you&apos;re
                building something, looking for collaboration, or simply want to
                connect with $PHREN, this is where the conversation starts.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-number">01</span>
                  <div>
                    <small>COMMUNITY</small>
                    <strong>JOIN THE SQUAD</strong>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-number">02</span>
                  <div>
                    <small>BUSINESS</small>
                    <strong>COLLABORATE</strong>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-number">03</span>
                  <div>
                    <small>IDEAS</small>
                    <strong>BUILD TOGETHER</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">YOUR NAME</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="ENTER YOUR NAME"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ENTER YOUR EMAIL"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="subject">SUBJECT</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="WHAT&apos;S ON YOUR MIND?"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="TELL US WHAT YOU&apos;RE BUILDING..."
                    required
                  ></textarea>
                </div>

                <input type="hidden" name="_subject" value="$PHREN 215 Website Contact" />
                <input type="hidden" name="_replyto" value="" />

                {formStatus === "success" && (
                  <div className="contact-form-message contact-form-success">
                    MESSAGE SENT. THANK YOU FOR REACHING OUT TO $PHREN 215.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="contact-form-message contact-form-error">
                    SOMETHING WENT WRONG. PLEASE TRY AGAIN.
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "SENDING..." : "SEND MESSAGE"}{" "}
                  <span>↗</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-manifesto">
          <div className="contact-manifesto-bg">CONNECT</div>

          <div className="contact-manifesto-content">
            <p className="contact-eyebrow">THE PHREN MINDSET</p>

            <h2>
              ONE
              <br />
              <span>CONVERSATION.</span>
              <br />
              ONE MOVE.
            </h2>

            <p>
              You never know where the next conversation can lead. Start the
              conversation. Build the relationship. Make the move.
            </p>
          </div>
        </section>

        <section className="contact-connect">
          <div className="contact-section-label">
            <span>02</span> CONNECT
          </div>

          <div className="contact-connect-header">
            <h2>
              FIND THE
              <br />
              <span>SQUAD.</span>
            </h2>

            <p>
              Stay connected with the movement and keep up with what&apos;s next.
            </p>
          </div>

          <div className="contact-social-grid">
            <a
              href="https://x.com/phren215"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <span>01</span>
              <div>
                <small>SOCIAL</small>
                <h3>X / TWITTER</h3>
              </div>
              <strong>↗</strong>
            </a>

            <a
              href="https://t.me/PHRENJAWNPHILLYTHING"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <span>02</span>
              <div>
                <small>COMMUNITY</small>
                <h3>TELEGRAM</h3>
              </div>
              <strong>↗</strong>
            </a>

            <Link to="/opportunities" className="contact-social-card">
              <span>03</span>
              <div>
                <small>BUILD</small>
                <h3>OPPORTUNITIES</h3>
              </div>
              <strong>↗</strong>
            </Link>

            <Link to="/hustles" className="contact-social-card">
              <span>04</span>
              <div>
                <small>CREATE</small>
                <h3>HUSTLES</h3>
              </div>
              <strong>↗</strong>
            </Link>
          </div>
        </section>

        <section className="contact-cta">
          <p className="contact-eyebrow">THE DOOR IS OPEN</p>

          <h2>
            WHO&apos;S
            <br />
            <span>COMING UP?</span>
          </h2>

          <p>
            PHREN made it out. Now the door is open. Your story starts with your
            next move.
          </p>

          <div className="contact-cta-actions">
            <Link to="/squad" className="contact-cta-button">
              JOIN THE SQUAD
            </Link>

            <Link to="/opportunities" className="contact-cta-outline">
              EXPLORE OPPORTUNITIES
            </Link>
          </div>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="contact-footer-brand">
          <Link to="/" className="contact-logo">
            $PHREN <span>215</span>
          </Link>

          <p>FROM THE 215. BUILT IN THE GRIND. BACK FOR THE SQUAD.</p>
        </div>

        <div className="contact-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/opportunities">OPPORTUNITIES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="contact-footer-bottom">
          <span>© 2026 $PHREN 215</span>
          <span>#PHILLYTHING</span>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
