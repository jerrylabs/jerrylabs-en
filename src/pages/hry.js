import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default () => {
  const games = require('../data/hry.json');
  return (
    <Layout>
      <Jumbotron title="Hry od JerryLabs" className="home zoomy" image="sisays-ring" />
      <div class="container">
        <p className="big center">
          V JerryLabs vyrábíme zábavné kopírovatelné společenské deskové hry. Všechny vydané hry jsou k&nbsp;dispozici zdarma ke stažení a&nbsp;vytisknutí pod licencí <Link to="/licence/">CC BY-NC-ND</Link>. Hry je možné nekomerčně šířit a&nbsp;kopírovat nebo si ji u&nbsp;nás můžete <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174">nechat vyrobit</a>.
        </p>
      </div>
      <div className="container cards small">
         {games.map((game, i) => (
          <Link key={i}
            className={`card card--horizontal card--full${game?.status ? ` label ${game.status}` : ''}`}
           to={`/hry/${game.codeName}`} title={game.title}
          >
            <div className="card__image" style={{backgroundImage: `url(/images/${game.codeName}.jpg)`}} />
            <div className="card__content">
              <h3 className="card__title">{game.title}</h3>
              <p className="card__description brief">Pro {game.players} hráčů {game.age} <span role="img" aria-label="Časová náročnost">⏰</span> {game.time}</p>
              <div className="card__description">{game.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
