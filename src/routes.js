import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Film from './pages/film';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/film/:id' exact component={Film}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;