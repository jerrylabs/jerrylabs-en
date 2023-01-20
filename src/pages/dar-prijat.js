import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="container">
      <section>
        <h1>Děkujeme!</h1>
        <p>Díky vám můžeme dále vylepšovat, rozšiřovat a vymýšlet nové hry dostupné pro všechny! <span role="img" aria-label="Joy">💖</span></p>
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