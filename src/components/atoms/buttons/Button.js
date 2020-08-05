import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  render() {
    return (
        <button 
          className={this.props.styles} 
          type={this.props.type}
          name="action" 
        >
          {this.props.text}
        </button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  style: PropTypes.string
}