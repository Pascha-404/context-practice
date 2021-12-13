import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function PageContent(props) {
	const { isDarkmode } = useContext(ThemeContext);

	const styles = {
		width: '100vw',
		height: '100vh',
		backgroundColor: isDarkmode ? 'black' : 'white',
	};
	return <div style={styles}>{props.children}</div>;
}

export default PageContent;
