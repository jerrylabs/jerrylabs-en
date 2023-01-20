import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => (
  <Layout>
     <Jumbotron title="Výroba deskové hry" className="zoomy" image="workshop" />
    <div className="container">
      <p className="big center">
      Cena vyrobení hry je zhruba do 800&nbsp;Kč, za dopravu 50&nbsp;-&nbsp;100&nbsp;Kč. Požadovanou hru jsme schopni vyrobit a odeslat do týdne, pokud nedojde k přetížení výrobních kapacit.
      </p>

      <iframe title="Kontaktní formulář" className="form order"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe6TaEOPNeme0R_yi0VJNpIx6vfABfwqmAw4IbqPxBs_ZnOpw/viewform?embedded=true"
        width="640" height="1800" frameBorder="0" marginHeight="0" marginwidth="0"
      >
        Načítání…
      </iframe>

    </div>
  </Layout>
)
