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
      <Jumbotron title={currGame.title} className="home zoomy" image="gangsterburg" />
     <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Rodinná desková hra volně na motivy společenské a politické situace. Volně ke stažení a vytištění na základě <Link to="/licence/">licence Creative Commons</Link>. ZIP archiv (8 MB) obsahuje karty, hrací desku, pravidla a návod k vytištění. Ke hře je třeba kostka a žetonky.
          </p>
          <div className="game__download-wrap">
            <a href="/games/gangsterburg.zip" className="button button--download">Stáhnout</a>
          </div>
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>Více o hře</h2>
          <p>
             Město Gangsterburg bylo vždy sídlištěm kriminálníků a podvratných živlů. Nově zvolená městská rada si však umí s hospodářskou krizí poradit! Všeobecná amnestie následovaná privatizací veškerých městských podniků je výzvou pro každého mafiána nažrat se kořisti.
          </p>
          <p>
             Jako hlava mafiánské rodiny máš za úkol získat převahu nad ostatními a tak ovládnout celý Gangsterburg!
          </p>
          <p>
            Nakupujte podniky degustace (hospody), finančního poradentsví (kasína), veřejných služeb (hampejzy) a zážitkových center (ilegální drogy) a korumpujte policisty, soudce i politiky.
          </p>
          <h2>Poděkování</h2>
          <p>
            Děkujeme všem, kteří se podíleli na testování a vývoji deskové hry Gangsterburg.
          </p>
        </div>
      </section>
    </Layout>
  )
}