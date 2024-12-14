import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuItem from './components/MenuItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ul>
    <MenuItem text="Kontakt" url="/contact" />
    <MenuItem text="O nas" url="/about" />
    <MenuItem text="Usługi" url="/services" />
  </ul>
);