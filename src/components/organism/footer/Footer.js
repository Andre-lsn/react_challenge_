import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer rodape">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text center-align">Só tem isso mesmo x-x</h5>
              </div>
            </div>
          </div>
          <div className="footer-copyright center-align">
            <div className="container">
              © 2020 Todo List do André ksks, copia ai Kakashi
            </div>
          </div>
        </footer>
    )
  }
}

