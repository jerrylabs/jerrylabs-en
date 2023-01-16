import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
      <div className="container">
        <section>
          <h1>License agreement</h1>
          <p>
            All JerryLabs games are licensed under a <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"  rel="noreferrer noopener">Creative Commons BY-NC-ND license</a>.
            Games may be downloaded, distributed, printed and shared under these terms:
          </p>
          <ul>
            <li>crediting JerryLabs as the author</li>
            <li>no commercial use is allowed</li>
            <li>no modification of the games is allowed</li>
          </ul>
          <p><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.en" target="_blank"  rel="noreferrer noopener">Full text of the license.</a></p>
          <img src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png" alt="" width="88" height="31" />
          <p>
          You can order production of a game <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174">here</a>. If you are interested in a commercial release please <Link to="/contact/">contact us</Link>.
          </p>
        </section>
    </div>
  </Layout>
)
