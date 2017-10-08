import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./../../components/Header";
import Search from "./../Search";
import Saved from "./../Saved";

class Main extends Component {
  state = {
  };

    render() {
        return (
            <div className="container">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/saved" component={Saved} />
                        <Route component={Search} />
                    </Switch>
                </Router>
            </div>
            
        )
    }
}

export default Main;