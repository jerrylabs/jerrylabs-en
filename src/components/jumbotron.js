import React from 'react'
import { Script } from 'gatsby'

export default ({title, image, className}) => (
  <>
    {image === 'matrix' && (
      <Script type="module" src="/js/matrix/js/main.js" />
    )}
    <div className={`jumbotron ${className || ''}`}>
      <div className="jumbotron__bg" style={{backgroundImage: `url(/images/${image}.jpg)`}} />
      <div className="container">
        <h1 className="jumbotron__title">{title}</h1>
      </div>
    </div>
  </>
)


