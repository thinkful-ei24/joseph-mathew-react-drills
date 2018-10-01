import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar(props) {
  const linkShower = props.links.map( (link, index) => {
    return (
    <li key={index}>
      <a href="{link.href}">{link.text}</a>
    </li>
    )
  });

  return (
    <header className='navigation-bar'>
    <h1>{props.title}</h1>
    <nav className='navigation-bar-nav'>
        <ul>
          {linkShower}
        </ul>
      </nav>
    </header>
  )
}