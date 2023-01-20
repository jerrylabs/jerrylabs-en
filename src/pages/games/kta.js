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
        <meta property="og:title" content="KTA: Krack That Auto!" />
        <meta property="og:url" content="https://www.jerrylabs.cz/hry/kta" />
        <meta property="og:image" content="https://www.jerrylabs.cz/images/kta.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Download and print the card game. Steal cars, dodge cops, crash and shoot your opponents to complete jobs for mafia bosses and rake in the big bucks!" />
      </Helmet>
      <Jumbotron title={currGame.title} className="zoomy" image="kta-game" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            The game is freely distributable under a <Link to="/license/">Creative Commons license</Link>.
            ZIP archive (23 MB) contains rules and PDF with cards and tokens. You can download and print the game here or have it made by us.</p>
          <div className="game__download-wrap">
            <a href="/games/kta.zip" className="button button--download">Download</a>
            <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174" className="button button--order">Order</a>
          </div>
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>More about the game</h2>
          <p>
            Shootouts, car thefts, car chases with the cops and destruction derbies, you'll experience it all in the this card game Krack That Auto!
          </p>
          <p>
            Krack That Auto! is a probe into the automotive industry and "business" in good old Gangsterburg. Steal cars, dodge cops, crash and shoot your rivals to do deals for mob bosses and rake in the big bucks!
          </p>
          <h2>Acknowledgements</h2>
          <p>
            We would like to thank Rockstar games for inspiration, Béďa for shared experiences from Anywhere City, Vlastič and Jarouš for testing and feedback, Jolanka for motivation and support and everyone else who contributed to the final form of the game.
          </p>
        </div>
      </section>
    </Layout>
  )
}