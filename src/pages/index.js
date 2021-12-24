import React, {useState} from 'react'
import {Link} from 'gatsby'
import FsLightbox from 'fslightbox-react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => {
  const webs = require('../data/weby.json');
  const games = require('../data/hry.json');
  const [lightboxController, setLightboxController] = useState({toggler: false, slide: 1});
  const openLightboxOnSlide = (e, number) => {
    e.preventDefault();
    setLightboxController({toggler: !lightboxController.toggler, slide: number});
  }
  return (
    <Layout>
      <Jumbotron title="Webové a herní studio" className="home zoomy" image="jumbotron" />
      <div className="container">
        <p className="big center">
          Jsme nezávislé webové a&nbsp;herní studio zaměřené na interakční design.
          Podle vaší grafiky vám seskládáme a&nbsp;rozhýbeme <Link to="/weby/">webovou stránku online</Link>.
          Anebo si stáhněte nějaké naše kopírovatelné print-to-play <Link to="/hry/">deskové hry</Link> <span role="img" aria-label=";)">😉</span>
        </p>
      </div>
      <section id="weby">
        <div className="container">
          <h2 className="center">Ukázky webů od JerryLabs</h2>
        </div>
        <div className="container cards">
          {webs.slice(0, 7).map((web, i) => (
            <a key={i}
              className="card card--vertical card--quarter card--centered"
              data-attribute="SRL" href={web.image} title={web.title}
              onClick={(e) => openLightboxOnSlide(e, i + 1)}
            >
              <img className="card__image" src={web.image} alt={`${web.title} (${web.year})`} />
              <div className="card__content">
                <h3 className="card__title">{web.title}</h3>
                {/* <div className="card__description">{web.year}</div> */}
              </div>
            </a>
          ))}
          <Link to="/weby/" className="card--quarter card--more">
            <span>Zobrazit více…</span>
          </Link>
        </div>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={webs.map(web => web.image)}
          slide={lightboxController.slide}
        />
      </section>

      <section id="hry">
        <div className="container">
          <h2 className="center">Hry od JerryLabs</h2>
        </div>
        <div className="container cards">
          {games.slice(0, 3).map((game, i) => (
            <a key={i}
              className={`card card--horizontal card--half${game?.status ? ` label ${game.status}` : ''}`}
              data-attribute="SRL" href={`/hry/${game.codeName}`} title={game.title}
            >
              <div className="card__image" style={{backgroundImage: `url(/images/${game.codeName}.jpg)`}} />
              <div className="card__content">
                <h3 className="card__title">{game.title}</h3>
                <div className="card__description">{game.endorsement}</div>
              </div>
            </a>
          ))}
          <Link to="/hry/" className="card--half card--more">
            <span>Všechny hry od JerryLabs…</span>
          </Link>
        </div>
      </section>
      <section id="kontakt">
        <p className="big center">
          S jakýmkoliv dotazem či nabídkou ke spolupráci nás neváhejte <Link to="/kontakt/">kontaktovat</Link>.
        </p>
      </section>

    </Layout>
  )
}
