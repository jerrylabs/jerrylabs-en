import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="container">
      <section>
        <h1>Přispění zrušeno</h1>
        <p>Je nám líto, že jste si podporu JerryLabs rozmysleli <span role="img" aria-label="Sadness">😢</span> Ale to nevadí, i v takovém případě jsou pro Vás naše hry k dispozici ke stažení a vytisknutí zdarma.</p>
        <p>Kam dále?</p>
          <ul className="p">
          <li><Link to="/weby/"><span>Weby</span></Link></li>
          <li><Link to="/hry"><span>Hry</span></Link></li>
          <li><Link to="/kontakt/"><span>Kontakt</span></Link></li>
        </ul>
      </section>
    </div>
  </Layout>
)