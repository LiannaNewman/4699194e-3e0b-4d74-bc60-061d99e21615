import './App.css'
import ClientForm from './ClientForm.js'

import React, {Component} from 'react'

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-instructions App-flex">
        <ClientForm />
      </div>
    </div>
  }
}

export default App
