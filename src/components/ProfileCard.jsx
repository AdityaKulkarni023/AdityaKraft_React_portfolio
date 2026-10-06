import { useState } from "react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-kulkarni23",
    icon: "fa-linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AdityaKulkarni23",
    icon: "fa-youtube",
  },
  {
    label: "GitHub",
    href: "https://www.github.com/AdityaKulkarni023",
    icon: "fa-github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reellifewithadi",
    icon: "fa-instagram",
  },
];

export function ProfileCard() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("adityakulkarni023@gmail.com");
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Could not copy email. Please copy it manually.");
    }
  }

  return (
    <div className="col-xl-4">
      <div className="card profile-card">
        <div className="card-body">
          <div className="image text-center">
            <img
              src="/assets/img/photo%20(2).jpeg"
              style={{
                height: 340,
                marginTop: "auto",
                width: 380,
                objectFit: "cover",
              }}
              alt="Aditya Kulkarni"
            />
          </div>
          <div className="text">
            <h3 className="card-title">Aditya Kulkarni👋</h3>
            <p>
              Software Engineer | Full-Stack Developer | Tech Content Creator,
              building web applications and sharing what I learn along the way.
            </p>
            <div className="common-button-groups">
              <a
                className="btn btn-call"
                href="/Aditya%20Kulkarni%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon fas fa-file-alt" aria-hidden="true" /> Resume
              </a>
              <button
                className="btn btn-copy"
                type="button"
                onClick={copyEmail}
              >
                <i className="icon far fa-copy" aria-hidden="true" /> Copy Email
              </button>
            </div>
            <div className="social-media-section">
              <div className="social-media-icon">
                <ul className="list-unstyled">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <i className={`fab ${link.icon}`} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="social-available-bar">
                <div className="social-live-dot" />
                <div className="social-marquee">
                  <div className="social-marquee-track">
                    <span>Software Engineer</span>
                    <span>Full-Stack Developer</span>
                    <span>Tech Content Creator</span>
                    <span>Building. Learning. Creating.</span>
                  </div>
                </div>
              </div>
            </div>
            {copyStatus && (
              <p className="copy-status" role="status">
                {copyStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
