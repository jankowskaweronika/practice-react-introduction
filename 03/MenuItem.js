import React from 'react';

const MenuItem = ({ text, url }) => {
  const styleLi = {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
  };
  const styleA = {
    color: 'black',
    textDecoration: 'none',
    backgroundColor: 'royalblue',
    padding: '0.5rem 2rem',
    margin: '2rem',
  };

  return (
    <li style={styleLi}>
      <a style={styleA} href={url}>
        {text}
      </a>
    </li>
  );
};

export default MenuItem;