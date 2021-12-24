import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'kta')
  return (
    <Layout className="game">
      <Helmet>
        <meta property="og:title" content="KTA: Kraď to auto!" />
        <meta property="og:url" content="https://www.jerrylabs.cz/hry/kta" />
        <meta property="og:image" content="https://www.jerrylabs.cz/images/kta.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Karetní hra ke stažení a tisku. Kraď auta, ujížděj policajtům, bourej a střílej do soupeřů abys splnil kšefty pro mafiánské bosse a nahrabal si pořádný balík peněz!" />
      </Helmet>
      <Jumbotron title={currGame.title} className="home zoomy" image="kta-game" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Hra je volně ke stažení a vytištění na základě <Link to="/licence/">licence Creative Commons</Link>.
            ZIP archiv (23 MB) obsahuje pravidla a PDF s kartami a žetonky.
          </p>
          <div className="game__download-wrap">
            <a href="/games/kta.zip" className="button button--download">Stáhnout hru</a>
          </div>
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>Více o hře</h2>
          <p>
          Přestřelky, krádeže aut, honičky s policajty a destruction derby, to vše zažijete v nové karetní hře Kraď to auto!
          </p>
          <p>
            Kraď to auto! je sonda do automobilového průmyslu a "obchodu" ve starém dobrém Gangsterburgu. Kraď auta, ujížděj policajtům, bourej a střílej do soupeřů abys splnil kšefty pro mafiánské bosse a nahrabal si pořádný balík peněz!
          </p>
          <h2>Poděkování</h2>
          <p>
            Děkujeme Rockstar games za inspiraci, Béďovi za společné zážitky z Anywhere City, Vlastičovi a Jaroušovi za testing a feedback, Jolance za motivaci a podporu a všem dalším, kteří se podíleli na výsledné podobě hry.
          </p>
        </div>
      </section>
    </Layout>
  )
}