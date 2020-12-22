import React from 'react'

export default () => {
  return (
    <footer>
      <div className="container">
        Powered by <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" >GatsbyJS</a> and <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a> ❤ <span className="nowrap"><span className="copy-left">©</span> JerryLabs 2013-{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

