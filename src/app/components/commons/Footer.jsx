import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';

class Footer extends PureComponent {

  get menuFirstColumn() {
    return [
      {
        title: 'About Us',
        url: 'about',
        type: 'scroll',
      },
      {
        title: 'Blog',
        url: 'https://callisto.network/blog/',
        type: 'anchor',
      },
    ];
  }

  get menuSecondColumn() {
    return [
      {
        title: 'Network Status',
        url: 'https://stats.callisto.network/',
        type: 'anchor',
      },
    ];
  }

  render() {
    const firstColumn = this.menuFirstColumn;
    const secondColumn = this.menuSecondColumn;

    return (
      <footer className='Footer'>
        <div className='Footer-top container'>
          <div className='Footer-top-list'>
            <span className='Footer-top-list-title'>
              Company
            </span>
            {firstColumn.map((elem) => {
              if (elem.type === 'router') {
                return (
                  <Link
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                  >
                    {elem.title}
                  </Link>
                );
              } else if (elem.type === 'scroll') {
                return (
                  <ScrollTo
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {elem.title}
                  </ScrollTo>
                );
              } else if (elem.type === 'anchor') {
                return (
                  <a
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    href={elem.url}
                    target='_blank'
                  >
                    {elem.title}
                  </a>
                )
              }
              return null;
            })}
          </div>
          <div className='Footer-top-list'>
            <span className='Footer-top-list-title'>
              Support
            </span>
            {secondColumn.map((elem) => {
              if (elem.type === 'router') {
                return (
                  <Link
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                  >
                    {elem.title}
                  </Link>
                );
              } else if (elem.type === 'scroll') {
                return (
                  <ScrollTo
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    to={elem.url}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {elem.title}
                  </ScrollTo>
                );
              } else if (elem.type === 'anchor') {
                return (
                  <a
                    key={`Footer-${elem.url}-${elem.title}`}
                    className='Footer-top-list-element'
                    href={elem.url}
                    target='_blank'
                  >
                    {elem.title}
                  </a>
                )
              }
              return null;
            })}
          </div>
        </div>
        <div className='Footer-bottom'>
          <div className='Footer-bottom-content container'>
            <div className='Footer-bottom-content-copy'>
              <span>
                © 2018 0xInfra is a EthereumCommonwealth Project
              </span>
            </div>
            <div className='Footer-bottom-content-links'>
              <figure>
                <img src='/image/clo-logo.svg' alt='CLO Logo'/>
              </figure>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
