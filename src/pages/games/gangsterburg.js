import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'gangsterburg')
  return (
    <Layout className="game">
      <Jumbotron title={currGame.title} className="zoomy" image="gangsterburg" />
     <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Unfortunately this game is currently available only in Czech language. Please consider supporting JerryLabs to translate it to English.
          </p>
          {/* <div className="game__download-wrap">
            <a href="/games/gangsterburg.zip" className="button button--download">Stáhnout hru</a>
          </div> */}
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>More about the game</h2>
          <p>
          The city of Gangsterburg was always the home of myriads of criminals and outcasts. Newly elected City Council knows the final solution! General amnesty and privatization of all city enterprises brings challenges for all mafia mob bosses to exploit the prey.
          </p>
          <p>
            As a head of one of the families your task is to get more influence than any others and take control of the whole Gangsterburg!
          </p>
          <p>
            You can buy the degustation companies (pubs), financial advisories (casinos), public services (brothels) and centres of experience (illegal drugs) and corrupt the police, judges and politicians.
          </p>
          <h2>Acknowledgement</h2>
          <p>
            Big thanks to everybody who participated on development and testing of this board game.
          </p>
        </div>
      </section>
    </Layout>
  )
}