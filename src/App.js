import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/HeaderComponent';
import HomePage from './pages/HomePage';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App()  {
	return (
		<Container>
			<CssBaseline/>
			<Header/>
			<Switch>
				<Route exact path='/' component={HomePage}/>
			</Switch>
		</Container>
	)
}
export default App;
