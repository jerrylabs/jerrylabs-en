import React, {useState} from 'react'
import {Link} from 'gatsby'
import classnames from 'classnames'
import { globalHistory } from "@reach/router"

const localizeURL = (url) => url
  .replace('contact', 'kontakt')
  .replace('games', 'hry')
  .replace('webs', 'weby')
  .replace('license', 'licence')
  .replace('jerrylabs.games.com', 'jerrylabs.cz')

export default () => {
  // viditelnost na mobilu
  const [expanded, expand] = useState(false)
  return (
    <header>
      <div className="container">
        <div className="header__homelink">
          <a href="/" className="logo">
            <img src="/images/logo-jerrylabs-white.png" alt="Logo" data-pin-nopin="true" />
          </a>
          <a href="/" className="textlogo">
            JerryLabs
            <div className="textlogo__name">Ing. Jaroslav Kameň</div>
          </a>
        </div>
        <nav>
          <ul className={classnames('header__navigation', {'header__navigation--mobile-visible': expanded})}>
             <li>
              <Link to="/games/" activeClassName="selected">
                <span>Games</span>
              </Link>
            </li>
            <li>
              <Link to="/webs/" activeClassName="selected">
                <span>Webs</span>
              </Link>
            </li>
            <li>
              <Link to="/contact/" activeClassName="selected">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <a href={`http://www.jerrylabs.cz${localizeURL(globalHistory.location.pathname)}`} title="Czech version" class="localization">
                <img src="/images/cz_flag.svg" alt="Czech version" />
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={() => expand(!expanded)} className="mobile-menu-icon">
          {expanded ? (
            <img src="/images/cross.svg" alt="Menu" />
          ) : (
            <img src="/images/menu.svg" alt="Menu" />
          )}

        </button>
      </div>
    </header>
  );
}

