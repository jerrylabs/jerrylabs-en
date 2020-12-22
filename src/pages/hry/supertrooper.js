import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'supertrooper')
  return (
    <Layout className="game">
      <Jumbotron title={currGame.title} className="home zoomy" image="supertrooper" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Kopírovatelná karetní hra ke stažení a vytisknutí pod licencí <Link to="/licence/">Creative Commons</Link>. Archiv ZIP (40 MB) obsahuje pravidla a tři dvojice předchystných balíčků pro duel:
          </p>
          <ul>
            <li>Mrazík vs. Santa Klaus</li>
            <li>Piráti vs. Exekutoři</li>
            <li>Technici vs. Kouzelníci</li>
          </ul>
          <div className="game__download-wrap">
            <a href="/games/supertrooper.zip" className="button button--download">Stáhnout hru</a>
          </div>
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>Více o hře</h2>
          <p>
            V paralelním vesmíru není život žádné peříčko. Jen hrstka lidí žije takzvaně svobodný život mimo ideologické diktáty korporací.
          </p>
          <p>
            Hráči představují warlordy ve vzájemném válečném konfliktu. Každý hraje se svým vlastním balíčkem. V něm se nacházejí bojovníci, zbraně a další speciální karty.
            V rolích warlordů je třeba chránit svá po generace střežená léna, těžit suroviny a zaručit bezpečnost svému lidu.
          </p>
          <h2>Historie a budoucnost</h2>
          <p>
            Prvopočátky karetní hry Super Trooper vznikly v ranných 90. letech na motivy legendárního Doomtrooperu. V průběhu let vzniklo přes 2000 karet a desítky balíčků.
          </p>
          <p>
            Přispěním k provozu JerryLabs můžete pomoci k výrobě nových karet a balíčků a jejich digitalizaci a překladu do angličtiny.
          </p>
          <h2>Poděkování</h2>
          <p>
            Na vzniku a vývoji karet Super Trooper se podíleli obzvláště David Sosna a David „Béďa“ Sobala. Kromě nich velké patří poděkování i všem ostatním, kteří se podíleli na vývoji karet až do jejich současné podoby.
          </p>
        </div>
      </section>
    </Layout>
  )
}