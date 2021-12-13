import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

const ThemeContext = createContext();

function ThemeProvider(props) {
	const [isDarkmode, toggleIsDarkmode] = useToggleState(false);
	return (
		<ThemeContext.Provider value={{ isDarkmode, toggleIsDarkmode }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };
