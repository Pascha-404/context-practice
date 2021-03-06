import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

import styles from './styles/NavBarStyles';

const langOptions = {
	english: { flag: '๐ฌ๐ง', flagAriaLabel: 'flag of england', search: 'Search...' },
	russian: { flag: '๐ท๐บ', flagAriaLabel: 'flag of russia', search: 'ะะพะธัะบ...' },
	german: { flag: '๐ฉ๐ช', flagAriaLabel: 'flag of germany', search: 'Suchen...' },
};

function Navbar(props) {
	const { isDarkmode, toggleIsDarkmode } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);
	const { classes } = props;
	const { flag, flagAriaLabel, search } = langOptions[language];
	return (
		<div className={classes.root}>
			<AppBar position='static' color={isDarkmode ? 'default' : 'primary'}>
				<Toolbar>
					<IconButton className={classes.menuButton} color='inherit'>
						<span role='img' aria-label={flagAriaLabel}>
							{flag}
						</span>
					</IconButton>
					<Typography className={classes.title} variant='h6' color='inherit'>
						App Title
					</Typography>
					<Switch onClick={toggleIsDarkmode} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={search}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(Navbar);
