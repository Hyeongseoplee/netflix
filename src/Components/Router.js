import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home/index';
import Search from '../Routes/Search/index';
import TV from '../Routes/TV/index';
import Detail from '../Routes/Detail/index';

import Header from './Header';

export default () => (
    <Router>
        <Header/>
        <>
        <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/search" component={ Search }/>
            <Route path="/tv" component={ TV }/>
            <Redirect from="*" to="/"/>
        </Switch>
        </>
    </Router>
)
