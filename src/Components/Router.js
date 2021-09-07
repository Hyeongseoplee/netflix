import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home/index';
import Search from '../Routes/Search/index';
import TV from '../Routes/TV/index';
import Detail from '../Routes/Detail/index';

import Header from './Header';

const Routers = () => (
    <Router>
        <Header/>
        <>
        <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/search" component={ Search }/>
            <Route path="/tv" component={ TV }/>
            <Route path="/movie/:id" component={ Detail }/>
            <Route path="/tv/:id" component={ Detail }/>
            <Redirect from="*" to="/"/>
        </Switch>
        </>
    </Router>
)

export default Routers;