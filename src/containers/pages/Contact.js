import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    var params = this.state;
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    let url = `https://script.google.com/macros/s/AKfycbxdTx1uqNG8fyOME73_2zpysfeH5oUbPRmszSweFaXj-FtakQI/exec?${query}`;

    fetch(url, {
      method: 'GET',
      headers : new Headers()
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <PageSection className="ui-white-powder">
        <h1>Contact</h1>

        <form onSubmit={this.handleSubmit}>
          <input id="name" type="text" name="name" onChange={this.handleChange} />

          <input id="email" type="email" name="email" onChange={this.handleChange} />

          <textarea id="body" name="body" onChange={this.handleChange}></textarea>

          <button type="submit">Submit</button>
        </form>
      </PageSection>
    )
  }
}

export default Contact;
