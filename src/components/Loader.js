import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({variant = 'primary', size = 'default'}) => {
  const loaderClass = classNames(
    // Boder
    ['rounded-full', 'border-gray-500', 'border-opacity-25'],
    // Animation
    'animate-spin',
    // Variant
    variant === 'white' ? 'border-t-white' : `border-t-${variant}-500`,
    // Size
    size === 'sm' && 'w-6 h-6 border-2',
    size === 'default' && 'w-8 h-8 border-4',
    size === 'lg' && 'w-12 h-12 border-4'
  );

  return <div className={loaderClass} />;
};

Loader.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'white']),
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
};

export default Loader;
