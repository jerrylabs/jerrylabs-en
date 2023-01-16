import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="p404">
      <div className="container">
        <h1>Once upon a time, there was a web page... or not?</h1>
        <p>We cannot find that <span role="img" aria-label="Sorry">🤷</span> Try instead:</p>
         <ul>
          <li><Link to="/webs"><span>Webs</span></Link></li>
          <li><Link to="/games"><span>Games</span></Link></li>
          <li><Link to="/contact"><span>Contact</span></Link></li>
        </ul>
      </div>
    </div>
  </Layout>
)
