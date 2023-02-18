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
      <Jumbotron title="Design > Code > Print > Play" className="zoomy" image="jumbotron" />
      <div className="container">
        <p className="big center">
        We are independent design studio producing websites and board games based in Orlová, Czech Republic.
        </p>
        <p className="big center">
          <Link to="/games">Our board games</Link> are shared under <Link to="/license">Creative Commons license</Link> so you can print them yourself or <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174">order it from us</a>.
        </p>
      </div>

      <section id="hry">
        <div className="container">
          <h2 className="center">Games from JerryLabs</h2>
        </div>
        <div className="container cards">
          {games.slice(0, 3).map((game, i) => (
            <a key={i}
              className={`card card--horizontal card--half${game.status ? ` label ${game.status}` : ''}`}
              data-attribute="SRL" href={`/games/${game.codeName}`} title={game.title}
            >
              <div className="card__image" style={{backgroundImage: `url(/images/${game.codeName}.jpg)`}} />
              <div className="card__content">
                <h3 className="card__title">{game.title}</h3>
                <div className="card__description">{game.endorsement}</div>
              </div>
            </a>
          ))}
          <Link to="/games/" className="card--half card--more">
            <span>More games from JerryLabs…</span>
          </Link>
        </div>
      </section>

      <section id="weby">
        <div className="container">
          <h2 className="center">Webs from JerryLabs</h2>
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
                <div className="card__description">{web.year}</div>
              </div>
            </a>
          ))}
          <Link to="/webs/" className="card--quarter card--more">
            <span>More websites…</span>
          </Link>
        </div>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={webs.map(web => web.image)}
          slide={lightboxController.slide}
        />
      </section>

      <section id="kontakt">
        <p className="big center">
          Do you have any questions or ideas? We will be happy to hear it from you. Please <Link to="/kontakt/">let us know</Link>.
        </p>
      </section>

    </Layout>
  )
}
