import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'finalconflict')
  return (
    <Layout className="game">
      <Jumbotron title={currGame.title} className="home zoomy" image="finalconflict" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Action card game shared under <Link to="/license/">Creative Commons license</Link>.
            Coming soon!
          </p>
            {/* <div className="game__download-wrap">
              <a href="/games/finalconflict.zip" className="button button--download">Download</a>
              <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174" className="button button--order">Order</a>
            </div> */}

          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>More about the game</h2>
          <p>
            Super Trooper: Final Conflict is standalone expansion of science fiction fantasy crossover card game <Link to='/hry/supertrooper'>Super Trooper.</Link>
          </p>
          <p>
            In the year 2500, humanity is not on a bed of roses. The polluted and contaminated planet Earth has become an inhospitable home for humanity, whose global population has split into two ideological factions.
          </p>
          <p>
            The Progress Movement professes a techno-optimistic belief in never-ending virtual growth and progress through the constant development of new technologies. Poisonous air and water, along with a weakened atmosphere, have forced this segment of humanity to live in vast, mostly underground metropolises where most of the inhabitants hardly ever see sunlight. They have largely entrusted the fulfillment of their needs to robots and virtual reality.
          </p>
          <p>
            The rest of humanity, left out in the wilderness, has gradually adapted to the changes. The Balance movement is guided by a fundamentalist philosophy of sustainability and total balance between man and nature. These communities are governed by strict rules regarding the behaviour and lifestyles of their members, which are enforced by severe penalties. Zero waste and near 100% recycling requires a demanding lifestyle, but contributes to their resilience.
          </p>
          <p>
            In the metropolises of Progress, people had no idea that any civilized society could survive outside. When diminishing geothermal resources, coupled with fluctuating solar activity, began to cause increasingly frequent energy problems, they were forced to send explorers into the wilderness in search of new resources. To their surprise, vegetation returned to parts of the surface in the form of radioactive jungle, and they quickly began to replenish the energy necessary to run their cities by burning the biomass they harvested there.
          </p>
          <p>
            The clash between Balance and Progress was not long in coming. Any hope of reconciliation is completely unthinkable for ideological reasons. The last clash in human history, the final conflict, begins.
          </p>
        </div>
      </section>
    </Layout>
  )
}