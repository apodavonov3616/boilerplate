import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import "./index.scss"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <Home />
      </div>
      //React.createElement("h1", null, "H1", this.props.name)
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App name={"Grace"}/>)
//root.render(React.createElement(App, {name: "Grace"}))