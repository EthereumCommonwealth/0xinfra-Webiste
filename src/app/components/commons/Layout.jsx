import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';

class Layout extends PureComponent {

  componentDidMount() {
    animateScroll.scrollToTop({ duration: 10 });
  }

  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
