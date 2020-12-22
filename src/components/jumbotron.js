import React from 'react'

export default ({title, image, className}) => (
  <div className={`jumbotron ${className || ''}`}>
    <div className="jumbotron__bg" style={{backgroundImage: `url(/images/${image}.jpg)`}} />
    <div className="container">
      <h1 className="jumbotron__title">{title}</h1>
    </div>
  </div>
)


