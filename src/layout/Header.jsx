import React from 'react';

function Header(props) {
  return (
    <nav className=" teal darken-2">
      <div className="nav-wrapper">
        <a href="#t" className="brand-logo left">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
