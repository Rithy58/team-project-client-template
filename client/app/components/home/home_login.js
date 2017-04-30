import React from 'react';

export default class Home_Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
   var value = event.target.value;
   var name = event.target.name;

   var partialState = {};
   partialState[name] = value;
   this.setState(partialState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control"
            placeholder="Username" name="username"
            value={this.state.username}
            onChange={this.handleInputChange}/>
          <input type="password" className="form-control"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
