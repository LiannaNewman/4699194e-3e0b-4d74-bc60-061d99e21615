import React, {Component} from 'react'

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: 0,
      need: 'need',
      feature: '',
      why: ''
    };
  }

  editPersona(event) {
    this.setState({
      persona: event.target.value
    })
  }

  editNeed(event) {
    this.setState({
      need: event.target.value
    })
  }

  editFeature(event) {
    this.setState({
      feature: event.target.value
    })
  }

  editWhy(event) {
    this.setState({
      why: event.target.value
    })
  }

  render() {

    return (
      <form>
        <h3> As a </h3>
        <label>
          <input type="text" placeholder="Describe A Persona"/>
        </label>
        <h3> I </h3>
        <label>
          <select id='need' onChange={this.editNeed} value={this.state.need}>
            <option value="Need">Need</option>
            <option value="Want">Want</option>
          </select>
        </label>
        <label>
          <input type="text" placeholder="Describe a feature, function, or capability"/>
        </label>
        <h3> So that </h3>
        <label>
          <input type="text" placeholder="I can..."/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )

  }
}

export default ClientForm
