import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Header/HeaderComponent';
import HomePage from './pages/HomePage';

import CssBaseline from '@material-ui/core/CssBaseline';



function App()  {
	return (
		<Container  maxWidth='xl' disableGutters={true}>
			<CssBaseline/>
			<Header/>
			<Switch>
				<Route exact path='/' component={HomePage}/>
			</Switch>
		</Container>
	)
}
export default App;
