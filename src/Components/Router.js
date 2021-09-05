import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';

import Header from './Header';

export default () => (
    <Router>
        <Header/>
        <>
        <Switch>
            <Route path="/" exact component={ Home }></Route>
            <Route path="/search" component={ Search }></Route>
            <Route path="/tv" component={ TV }></Route>
            <Redirect from="*" to="/home"/>
        </Switch>
        </>
    </Router>
)
