import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Route, Switch, Link } from 'react-router-dom';
import BillingSummary from './BillingSummary';
import CurrentBilling from './CurrentBilling';

class Root extends Component {
    state = { }
    render() {
        return (
            <div>
                <Header>
                </Header>
                <hr/> 
                <Link to="/">Summary</Link> {" | "}
                <Link to="/current">Current Billing</Link>
                <hr/>
                <Switch>
                    <Route component={CurrentBilling} path="/current"></Route>
                    <Route component={BillingSummary} path="/"></Route>
                </Switch>
                <hr/>
                <Footer></Footer>
            </div>

        );
    }
}
export default Root