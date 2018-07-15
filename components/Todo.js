import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
   render() {
        const styles = {
            fontSize: 24,
            color: "blue",
        };
        return (
            <li style={styles} id={this.props.id}>
                {this.props.text}
            </li>
      )
   }
}