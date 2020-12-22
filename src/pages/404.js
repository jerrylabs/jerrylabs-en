import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="p404">
      <div className="container">
        <h1>Bylo tu, není tu, 404 na plotu...</h1>
        <p>Nemůžeme to najít <span role="img" aria-label="Sorry">🤷</span> Zkuste třeba:</p>
         <ul>
          <li><Link to="/weby/"><span>Weby</span></Link></li>
          <li><Link to="/hry"><span>Hry</span></Link></li>
          <li><Link to="/kontakt/"><span>Kontakt</span></Link></li>
        </ul>
      </div>
    </div>
  </Layout>
)
