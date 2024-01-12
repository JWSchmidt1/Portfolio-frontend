import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='themeToggleCon'>
      <input
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="switch" className='toggleLabel'>Toggle</label>
    </div>
  );
};

export default ThemeToggle;