import React, { PureComponent } from 'react';
import { Link as ScrollTo } from 'react-scroll';

class Header extends PureComponent {

  get menuElements() {
    return [
      {
        title: 'About Us',
        url: 'about',
      },
      {
        title: 'RPC nodes',
        url: 'nodes',
      },
      {
        title: 'Features',
        url: 'features',
      },
      {
        title: 'Support',
        url: 'support',
      },
    ];
  }

  render() {
    const menuElements = this.menuElements;
    return (
      <header className='Header'>
        <div className='Header-content container'>
          <a href='/'>
            <figure className='Header-figure'>
              <img src='/image/logo.svg' alt='0xInfra Logo'/>
            </figure>
          </a>
          <nav className='Header-menu'>
            <ul className='Header-menu-content'>
              {menuElements.map((elem, index) => (
                <li key={`menuElement-${index}`}>
                  <ScrollTo
                    className='Header-menu-content-target'
                    to={elem.url}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                  >
                    {elem.title}
                  </ScrollTo>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
