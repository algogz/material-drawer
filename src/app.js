import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Demo from './demo-tabs'

export default class extends Component {

  async componentDidMount() {
    // const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()
    //
    // this.setState({ writers })
  }

  render() {
    // const { writers } = this.state

    return (
      <BrowserRouter>
        <Demo/>
      </BrowserRouter>
    )
  }
}
