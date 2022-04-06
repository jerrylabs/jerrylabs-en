import React, {useState} from 'react'
import {Link} from 'gatsby'
import FsLightbox from 'fslightbox-react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => {
  const [lightboxController, setLightboxController] = useState({toggler: false, slide: 1});
  const openLightboxOnSlide = (e, number) => {
    e.preventDefault();
    setLightboxController({toggler: !lightboxController.toggler, slide: number});
  }
  const webs = require('../data/weby.json');
  return (
    <Layout>
      <Jumbotron title="Weby od JerryLabs" className="home zoomy" image="matrix" />
      <section>
        <div className="container cards">
          {webs.map((web, i) => (
            <a key={i}
              className="card card--vertical card--third card--centered"
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
        </div>
      </section>
      <section>
        <p className="center">
          Potřebujete vyrobit či zprovoznit web? Neváhejte nás <Link to="/kontakt">kontaktovat</Link>!
        </p>
      </section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={webs.map(web => web.image)}
        slide={lightboxController.slide}
      />
    </Layout>
  )
}
