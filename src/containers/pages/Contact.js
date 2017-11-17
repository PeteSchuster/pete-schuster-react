import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      email: '',
      body: '',
      loading: false
    };

    this.state = Object.assign({}, this.initialState);

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

    this.setState({ loading: true });

    fetch(url, {
      method: 'GET',
      headers : new Headers()
    }).then(res => {
      console.log(res);
      this.setState(Object.assign({}, this.initialState, {success: true}));
    });
  }

  renderSuccess() {
    return (
      <div>
        Success!
      </div>
    )
  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  render() {
    const {success, loading} = this.state;

    return (
      <PageSection>
        <h1>Contact</h1>

        {success && this.renderSuccess()}
        {loading && this.renderLoading()}

        <form onSubmit={this.handleSubmit}>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required />

          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required />

          <label for="body">Message</label>
          <textarea
            id="body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
            required>
          </textarea>

          <button type="submit">Submit</button>
        </form>
      </PageSection>
    )
  }
}

export default Contact;
