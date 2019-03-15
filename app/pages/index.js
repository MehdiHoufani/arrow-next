import React, { Component } from "react";
import { Cell, Grid } from "react-md";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import "./index.scss";

import Header from "../components/header";

import Collectives from "./collectives";
import Home from "./home/index";

class Index extends Component {
  state = {
    currentPage: "home"
  };

  handleChangePage = currentPage => {
    this.setState({ currentPage });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <React.Fragment>
        <div className={`background ${currentPage}`} />
        <Header
          currentPage={currentPage}
          onChangePage={this.handleChangePage}
        />
        <Grid className="page-content">
          <Cell size={10} desktopOffset={1} className={"scrollable-content"}>
            {currentPage === "home" && <Home />}
            {currentPage === "collectivite" && <Collectives />}
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Index;