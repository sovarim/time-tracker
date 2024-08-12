import React from 'react';

export const useToggleTheme = () => {
  const toggleTheme = React.useCallback(() => {
    document.documentElement.classList.toggle('dark');
  }, []);

  return toggleTheme;
};
