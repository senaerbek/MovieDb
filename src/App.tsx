import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {MovieScreen} from "./screens/MovieScreen";
import {Container, Menu} from "semantic-ui-react";
import { MovieDetailScreen } from './screens/MovieDetailScreen';

function AppComponent() {
    return (
        <Container className='app-container'>
            <Menu inverted color='blue' widths={1}>
                <Menu.Item
                    name='Movies'
                />
            </Menu>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MovieScreen}/>
                    <Route exact path='/:id' component={MovieDetailScreen}/>
                    <Route path='*' component={() => <Redirect to={'/'}/>}/>
                </Switch>
            </BrowserRouter>
        </Container>
    );
}

export function App() {
    return (
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    );
}
