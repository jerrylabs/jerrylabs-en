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
      <Jumbotron title={currGame.title} className="zoomy" image="supertrooper" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Unfortunately this game is currently available only in Czech language except latest standalone expansion <Link to="/games/finalconflict">Super Trooper: Final Conflict</Link>.
          </p>
          {/* <div className="game__download-wrap">
            <a href="/games/supertrooper.zip" className="button button--download">Stáhnout hru</a>
          </div> */}
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>More about the Game</h2>
          <p>
          Life is tough especially in parallel universe. Just couple of humans is living in so-called freedom outside of ideological dictatorship of the corporations.
          </p>
          <p>
            Players are representing warlords in mutual war conflict. Each player has their own deck of cards including warriors, gear and other special cards.
            As a warlord you have to defend your territory guarded for generations, mine the resources and secure the safety of your people.
          </p>
          <h2>History and future</h2>
          <p>
            The origins of the Super Trooper begin in early 90’s based with the motive based on legendary trading card game Doomtrooper. Since then more than 2000 cards and tens of decks were created. Currently, the story of Super Trooper concludes in newest standalone expansion <Link to="/games/finalconflict">Final Conflict</Link>.
          </p>
          <p>
            By donating to the JerryLabs you can help us to translate the game to the English, create new decks and digitalize the game.
          </p>
          <h2>Acknowledgement</h2>
          <p>
            Special thanks belongs to David Sosna a David „Bedya“ Sobala who had significant share on creating and development of the game. Big thanks also to everybody else, who participated on the evolution of the cards until current state.
          </p>
        </div>
      </section>
    </Layout>
  )
}