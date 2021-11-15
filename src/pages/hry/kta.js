import React from 'react'
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
      <Jumbotron title={currGame.title} className="home zoomy" image="beton" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Přestřelky, krádeže aut, honičky s policajty a destruction derby, to vše zažijete v nově připravované karetní hře Kraď to auto!
            {/* Dvě varianty ZIP archivů (20 MB) obsahuje jednostranné i oboustranné verze karet v PDF, návod k vytištění a pravidla hry. */}
            {/* Ke hře jsou potřeba kostky nebo <a href="https://bit.ly/circusdice" target="_blank" rel="noopener noreferer">aplikace</a>. */}
          </p>
          {/* <div className="game__download-wrap">
            <a href="/games/circus.zip" className="button button--download">Stáhnout hru</a>
          </div> */}
          {/*
          <div className="game__download-wrap">
            <a href="#" className="button button--download">Stáhnout oboustranně</a>
          </div>
          */}
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>Více o hře</h2>
          <p>
            Kraď to auto! je sonda do automobilového průmyslu a "obchodu" ve starém dobrém Gangsterburgu. Kraď auta, ujížděj policajtům, bourej a střílej do soupeřů abys splnil kšefty pro mafiánské bosse a nahrabal si pořádný balík peněz!
          </p>
          <p>
            Kraď to auto! obsahuje dva herní módy: akční pro rychlý a adrenalinový zážitek a strategický pro milovníky intrik a matení nepřítele.
          </p>
          <h2>Poděkování</h2>
          <p>
            Děkujeme Rockstar games za inspiraci, Béďovi za společné zážitky v Anywhere City a Jolance za motivaci a podporu.
          </p>
        </div>
      </section>
    </Layout>
  )
}