import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'circus')
  return (
    <Layout className="game">
      <Jumbotron title={currGame.title} className="zoomy" image="circus" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Competitive sci-fi RPG dungeon crawler card game. Available for download, print and play under <Link to="/license/">CC BY-NC-ND license</Link>.
            ZIP archive (36 MB) contains 2 PDFs with cards, game rules and instruction for print.
            {/* Dvě varianty ZIP archivů (20 MB) obsahuje jednostranné i oboustranné verze karet v PDF, návod k vytištění a pravidla hry. */}
            {/* Ke hře jsou potřeba kostky nebo <a href="https://bit.ly/circusdice" target="_blank" rel="noopener noreferer">aplikace</a>. */}
          </p>
          <div className="game__download-wrap">
            <a href="/games/circus.zip" className="button button--download">Download</a>
          </div>
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
          <h2>More about the Game</h2>
          <p>
            Survive in crazy labyrinth! As a trashed-out robot or degenerated mutant you have to get through bunch of savage monsters and malicious traps. Get the fame and love of simple-minded consumerist fans and become the champion of Cyborg Mutant Zombie Circus arena. The prize for the winner is the ultimate challenge – become official human.
          </p>
          <p>
          Originally as just a Christmas present for couple closest friends the Cyborg Mutant Zombie Circus recevied outstandingly positive feedback, won the Czech Board Games authors’ competition and received proffesional graphics and illustrations. Now it is officialy available to print and play. Enjoy the game!
          </p>
          <h2>Acknowledgement</h2>
          <p>
          For current state of the Cyborg Mutant Zombie Circus we are grateful to the intensive testing and feedback of many fans and colleagues. Many thanks and appreciations to Jolanka, Web Pro team, Czech Board Games and others who participated on it. Author of the card design and illustrations is Ondřej Šulák.
          </p>
        </div>
      </section>
    </Layout>
  )
}