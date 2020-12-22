import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
      <div className="container">
        <section>
          <h1>Licenční ustanovení</h1>
          <p>
            Všechny hry společnosti JerryLabs spadají pod licenci <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"  rel="noreferrer noopener">Creative Commons BY-NC-ND</a>.
            Hry je možné stahovat, šířit, tisknout a sdílet při zachování těchto podmínek:
          </p>
          <ul>
            <li>uvedení JerryLabs jako autora</li>
            <li>není dovoleno komerční užití</li>
            <li>není dovoleno hry upravovat</li>
          </ul>
          <p><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.cs" target="_blank"  rel="noreferrer noopener">Kompletní text licence.</a></p>
          <img src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png" alt="" width="88" height="31" />
          <p>
            V případě zájmu o komerční vydání nás prosím <Link to="/kontakt/">kontaktujte</Link>.
          </p>
        </section>
    </div>
  </Layout>
)
