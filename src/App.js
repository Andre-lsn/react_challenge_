import React, { Component, Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/organism/header/Header'
import Main from './components/organism/main/Main'
import Footer from './components/organism/footer/Footer'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

