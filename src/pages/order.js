import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => (
  <Layout>
     <Jumbotron title="Objednávka výroby deskové hry" className="home zoomy" image="workshop" />
    <div className="container">
      <p class="big center">
        Pro objednání výroby hry prosím vyplňte formulář níže na této stránce. Hru jsme schopni vyrobit a odeslat do týdne, pokud nedojde k přetížení výrobních kapacit.
      </p>

      <iframe title="Kontaktní formulář" className="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe6TaEOPNeme0R_yi0VJNpIx6vfABfwqmAw4IbqPxBs_ZnOpw/viewform?embedded=true"
        width="640" height="925" frameBorder="0" marginHeight="0" marginwidth="0"
      >
        Načítání…
      </iframe>

    </div>
  </Layout>
)
