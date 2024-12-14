import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const HeaderFn = () => {
  const styleFn = {
    fontSize: '20px',
    color: 'white',
    fontFamily: 'sans-serif',
    textShadow: '1px 1px 1px black',
    letterSpacing: '1rem',
    textTransform: 'uppercase',
    lineHeight: 1.25,
    marginBottom: '0.75rem',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: 'royalblue',
    padding: '1rem',
  };
  return <header style={styleFn}>Moja pierwsza strona w React</header>;
};
class HeaderCl extends Component {
  render() {
    const styleCl = {
      fontSize: '24px',
      color: 'white',
      fontStyle: 'italic',
      fontFamily: 'cursive',
      textShadow: '1px 1px 1px black',
      lineHeight: 1.25,
      margin: '0 auto',
      marginTop: '0.75rem',
      textAlign: 'center',
      backgroundColor: 'darkred',
      padding: '1rem',
    };
    return <header style={styleCl}>Moja pierwsza strona w React</header>;
  }
}
root.render(
  <>
    <HeaderFn />
    <HeaderCl />
  </>
);