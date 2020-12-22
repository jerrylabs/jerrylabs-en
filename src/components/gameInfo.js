import React, {useState} from 'react'
import FsLightbox from 'fslightbox-react'

export default ({game}) => {
  const [lightboxController, setLightboxController] = useState({toggler: false, slide: 1});
  return (
    <div className="gameInfo game__info">
      <div className="gameInfo__fields">
        <div className="gameInfo__field">
          <div className="gameInfo__value"><span role="img" aria-labelledby="lblPls">👪</span> {game.players}</div>
          <div className="gameInfo__label" id="lblPls">Počet hráčů</div>
        </div>
        <div className="gameInfo__field">
          <div className="gameInfo__value"><span role="img" aria-labelledby="lblTime">⏰</span> {game.time}</div>
          <div className="gameInfo__label" id="lblTime">Délka hry</div>
        </div>
        <div className="gameInfo__field">
          <div className="gameInfo__value"><span role="img" aria-labelledby="lblAge">👶</span> {game.age}</div>
          <div className="gameInfo__label" id="lblAge">Věk</div>
        </div>
      </div>

      {game.tags && (
        <div className="gameInfo__tags">
          {game.tags.map((tag, i) => <span className="gameInfo__tag" key={i}>{tag}</span>)}
        </div>
      )}

      {game.images && (
        <>
          <h2>Galerie</h2>
          <div className="gameInfo__gallery">
            <FsLightbox
              toggler={lightboxController.toggler}
              sources={game.images.map(image => `/images/games/${game.codeName}/${image}`)}
              slide={lightboxController.slide}
            />
            {game.images.map((image, i) => (
              <button
                key={i}
                type="button"
                className="gameInfo__preview"
                style={{backgroundImage: `url(/images/games/${game.codeName}/${image})`}}
                onClick={() => setLightboxController({toggler: !lightboxController.toggler, slide: i + 1})}
              />
            ))}
          </div>
        </>
      )}

      {game.extLinks && (
        <div className="gameInfo__extLinks">
          {game.extLinks.bgg && (
            <a href={game.extLinks.bgg} target="_blank" rel="noreferrer noopener">
              <img className="bggLogo" src="/images/bgg.svg" alt="Profil hry na BoardGameGeek.com" />
            </a>
          )}
          {game.extLinks.zatrolene && (
            <a href={game.extLinks.zatrolene} target="_blank" rel="noreferrer noopener">
              <img className="zhLogo" src="/images/zatrolene-hry.png" alt="Profil hry na ZatroleneHry.cz" />
            </a>
          )}
        </div>
      )}


    </div>
  )
}


