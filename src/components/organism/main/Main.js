import React, { Component } from 'react'
import './Main.css'
import List from '../../List/List'
import Button from '../../atoms/buttons/Button'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: []
    }
  }

  onChange = event => 
    this.setState({ term: event.target.value })

  addItem = event => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  render() {
    return (
      <main>
        <div className="row">
          <form className="col s12" onSubmit={this.addItem}>
            <div className="row">
              <div className="input-field col s3">
                <input
                  placeholder="Nome da tarefa"
                  id="name"
                  type="text"
                  className="validate"
                  required
                  autoComplete="off"
                  value={this.state.term}
                  onChange={this.onChange} 
                />
                <label htmlFor="name" />
              </div>
              <div className="input-field col s3">
                <Button 
                  styles={"waves-effect waves-light btn adicionaTarefa"} 
                  type="submit" 
                  text="Adicionar Tarefa"
                />
              </div>
              <div className="col s6 center pull-s1 lista">
                <List items={this.state.items} />
              </div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}



