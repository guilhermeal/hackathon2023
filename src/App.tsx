import { useState } from "react";
import reactLogo from "./assets/asteroid.png";
import { texts } from "./helpers/languages";
import { team } from "./helpers/team";
import logoNasaSpaceApps from "./assets/logoNasaSpaceApps.png";
import "./styles/app.css";
import { Person } from "./components/person";

function App() {
  const [option, setOption] = useState<string>();
  const [language, setLanguage] = useState("en");

  const [inputName, setInputName] = useState();
  const [inputMail, setInputMail] = useState();
  const [inputMessage, setInputMessage] = useState();

  const langs = Object.keys(texts);
  const text = texts[language];

  const returnAllLanguages = () => {
    return langs
      .filter((lang) => lang !== language)
      .map((lang) => (
        <a
          className="flagLink"
          title={texts[lang].flagDescription}
          onClick={() => setLanguage(`${lang}`)}
          style={{ textTransform: "uppercase" }}
        >
          <img src={texts[lang].flag} alt="" />
        </a>
      ));
  };

  const submitContactForm = () => {
    console.log("Submitting...");
  };

  const renderContentOption = (option?: string) => {
    switch (option) {
      case "about":
        return (
          <div className="contactForm">
            <h1>{text.header.about}</h1>
            <div className="aboutText">
              <h2>{text.about.title}</h2>
              <p>{text.about.description}</p>
            </div>
            <div className="aboutText">
              <h2>{text.about.title2}</h2>
              <p>{text.about.description2}</p>
            </div>
            <div className="aboutText">
              <h2>{text.about.title3}</h2>
              <p>{text.about.description3}</p>
            </div>
            <div className="aboutText">
              <h2>{text.about.title4}</h2>
              <p>{text.about.description4}</p>
            </div>
            <div className="aboutText">
              <h2>{text.about.title5}</h2>
              <p>{text.about.description5}</p>
            </div>
          </div>
        );
      case "team":
        return (
          <div className="contactForm">
            <h1>{text.header.team}</h1>
            <div className="teamBox">
              {team.map((person) => (
                <Person person={person} />
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="contactForm">
            <h1>{text.header.contact}</h1>
            <form onSubmit={submitContactForm}>
              <div>
                <label htmlFor="name">
                  {texts[language].contact.nameLabel}:
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={inputName}
                  onChange={() => setInputName}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">
                  {texts[language].contact.emailLabel}:
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={inputMail}
                  onChange={() => setInputMail}
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem">
                  {texts[language].contact.messageLabel}:
                </label>
                <br />
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={inputMessage}
                  onChange={() => setInputMessage}
                  required
                />
              </div>

              <div className="cardButton">
                <button type="submit">
                  {texts[language].contact.sendButtonLabel}
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return (
          <>
            <div className="logoPsyche">
              <img
                src={reactLogo}
                className="logo psyche"
                alt="Asteroid Psyche"
              />
            </div>
            <div className="content">
              <h1>{text.titlePage}</h1>
              <h3>{text.subTitlePage}</h3>
              <div className="cardButton">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1tMx-_PEfz2AzYvyNntduZMctqmsAitto/view"
                    )
                  }
                >
                  {text.downloadButton}
                </button>
                <p className="read-the-docs">
                  {text.downloadButtonDescription}
                </p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div></div>
          <ul>
            <li>
              <a href="#" onClick={() => setOption(undefined)}>
                {text.header.home}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setOption("about")}>
                {text.header.about}
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1tMx-_PEfz2AzYvyNntduZMctqmsAitto/view"
                target="_blank"
              >
                {text.header.download}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setOption("team")}>
                {text.header.team}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setOption("contact")}>
                {text.header.contact}
              </a>
            </li>
          </ul>
          <div>{returnAllLanguages()}</div>
        </nav>
      </header>
      <main>{renderContentOption(option)}</main>
      <img
        className="logoNasaSpaceApps"
        src={logoNasaSpaceApps}
        alt="Logo Nasa Space Apps"
      />
      <footer>
        <p>
          &copy; 2023 Psyche Project Game :: Nasa Space Apps - Hackathon 2023
        </p>
      </footer>
    </div>
  );
}

export default App;
