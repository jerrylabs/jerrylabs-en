import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => (
  <Layout>
     <Jumbotron title="Contact JerryLabs" className="home zoomy" image="antenna" />
    <div className="container">
      <p class="big center">
        All your questions, orders or any other feedback can be addressed via any of channels or the form below.
      </p>
      <ul class="contact__social center">
        <li>
          <a href="http://facebook.com/jerrylabsgames" target="_blank" rel="noopener noreferrer">
            <img alt="JerryLabs Games - Facebook" title="JerryLabs Games on Facebook" src="/images/logos/logo-facebook.png" />
          </a>
        </li>
        <li>
          <a href="http://twitter.com/jerrylabs" target="_blank" rel="noopener noreferrer">
            <img alt="JerryLabs @ Twittter" title="JerryLabs @ Twittter" src="/images/logos/logo-twitter.png" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jerrylabs" target="_blank" rel="noopener noreferrer">
            <img alt="Jaroslav Kameň at LinkedIn" title="Jaroslav Kameň at LinkedIn" src="/images/logos/logo-linkedin.png" />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/jerrousz" target="_blank" rel="noopener noreferrer">
            <img alt="Jerry @ Instagram" title="Jerry @ Instagram" src="/images/logos/logo-instagram.png" />
          </a>
        </li>
        <li>
          <a href="http://www.imdb.com/name/nm6707588/" target="_blank" rel="noopener noreferrer">
            <img alt="Jaroslav Kameň at IMDb" title="Jaroslav Kameň at IMDb" src="/images/logos/logo-imdb.png" />
          </a>
        </li>
        <li>
          <a href="https://jihomoravsky.pirati.cz/lide/jaroslav-kamen" target="_blank" rel="noopener noreferrer">
            <img alt="Jaroslav Kameň - Czech Pirate Party" title="Jaroslav Kameň - Czech Pirate Party" src="/images/logos/logo-cps.png" />
          </a>
        </li>
      </ul>
      <div class="contact">
        <div class="contact__address">
          <p>
            Ing. Jaroslav Kameň<br />
            Masarykova třída 955, Orlová<br />
            Czech Republic<br />
            IČO 02598248<br />
            tel. +420 608 552 333<br />
            mail: <a href="mailto:jerrylabs@seznam.cz">jerrylabs@seznam.cz</a>
          </p>
        </div>
        <img class="contact__photo" src="/images/jerry-photo.jpg" alt="Jaroslav Kameň" title="Jaroslav Kameň" />
      </div>

      <iframe title="Kontaktní formulář" className="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScsmoXQKKGRzHvJiFbxE4fwICU_ytvjRLFGVsyHyD9aic4Qtg/viewform?embedded=true"
        width="640" height="725" frameBorder="0" marginHeight="0" marginwidth="0"
      >
        Načítání…
      </iframe>

    </div>
  </Layout>
)
