import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => {
  const games = require('../data/hry.json');
  return (
    <Layout>
      <Jumbotron title="Games from JerryLabs" className="home zoomy" image="sisays-ring" />
      <div class="container">
        <p className="big center">
        All our games are available for download, print and play and can be shared and distributed non-commercionally under <Link to="/license">CC BY-NC-ND license</Link>.
        Also you can <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174">order the production from us</a>.
        </p>
      </div>
      <div className="container cards small">
         {games.map((game, i) => (
          <Link key={i}
            className={`card card--horizontal card--full${game.status ? ` label ${game.status}` : ''}`}
           to={`/games/${game.codeName}`} title={game.title}
          >
            <div className="card__image" style={{backgroundImage: `url(/images/${game.codeName}.jpg)`}} />
            <div className="card__content">
              <h3 className="card__title">{game.title}</h3>
              <p className="card__description brief">For {game.players} players from {game.age} <span role="img" aria-label="Časová náročnost">⏰</span> {game.time}</p>
              <div className="card__description">{game.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
