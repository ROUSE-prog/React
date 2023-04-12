import React from 'react';

const Header = ({ onToggleTheme }) => {
  return (
    <header>
      <div className="component-container">
        <h1>Steven Rouse</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button onClick={onToggleTheme}>Toggle Theme</button>
      </div>
    </header>
  );
};

export default Header;
