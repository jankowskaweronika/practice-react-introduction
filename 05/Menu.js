import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';
const Menu = ({ items }) => {
  const list = items.map(({ text, url }) => {
    return <MenuItem text={text} url={url} />;
  });
  return <ul>{list}</ul>;
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Menu;