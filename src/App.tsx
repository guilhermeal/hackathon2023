import { useState } from "react";
import reactLogo from "./assets/asteroid.png";
import { texts } from "./helpers/languages";
import { team } from "./helpers/team";
import logoNasaSpaceChallange from "./assets/logoNasaSpaceChallange.png";
import logoNasaSpaceAppsCampinas from "./assets/logoNasaSpaceAppsCampinas.png";
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
          key={lang}
          className="flagLink"
          title={texts[lang].flagDescription}
          onClick={() => setLanguage(`${lang}`)}
          style={{ textTransform: "uppercase" }}
        >
          <img src={texts[lang].flag} alt="" />
        </a>
      ));
  };

  const handleClickLink = (link: string, target?: "_top" | "_blank") => {
    window.open(link, target ?? "_blank", "noopener noreferrer")?.focus();
  };

  const submitContactForm = () => {
    console.log("Submitting...");
  };

  const renderContentOption = (option?: string) => {
    switch (option) {
      case "about":
        return (
          <div className="contactForm">
            <h1 key={1}>{text.header.about}</h1>
            <div key={2} className="embedVideo">
              <span className="blinking">
                {text.about.loadingVideo}
                <span className="dots">...</span>
              </span>
              <iframe
                className="iframeVideo"
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/DtbqJCsQlEQ?si=yj3N-qTJL6VpLVgE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div key={3} className="aboutText">
              <h2>{text.about.title}</h2>
              <p>{text.about.description}</p>
            </div>
            <div key={4} className="aboutText">
              <h2>{text.about.title2}</h2>
              <p>{text.about.description2}</p>
            </div>
            <div key={5} className="aboutText">
              <h2>{text.about.title3}</h2>
              <p>{text.about.description3}</p>
            </div>
            <div key={6} className="aboutText">
              <h2>{text.about.title4}</h2>
              <p>{text.about.description4}</p>
            </div>
            <div key={7} className="aboutText">
              <h2>{text.about.title5}</h2>
              <p>{text.about.description5}</p>
            </div>
            <div>
              <img
                onClick={() =>
                  handleClickLink(
                    "https://www.spaceappschallenge.org/2023/locations/campinas/"
                  )
                }
                className="link logoNasaCampinas"
                title="Nasa Space Apps Campinas"
                src={logoNasaSpaceAppsCampinas}
                alt="Logo Nasa Space Apps Campinas"
              />
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
          <div className="contentDefault">
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
          </div>
        );
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div key={0}></div>
          <ul key={1}>
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
          <div key={2}>{returnAllLanguages()}</div>
        </nav>
      </header>
      <main>{renderContentOption(option)}</main>
      <img
        onClick={() =>
          handleClickLink(
            "https://www.spaceappschallenge.org/2023/find-a-team/asteroid-explorers/?tab=project"
          )
        }
        className="link logoNasa"
        title={text.logoTitle}
        src={logoNasaSpaceChallange}
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
