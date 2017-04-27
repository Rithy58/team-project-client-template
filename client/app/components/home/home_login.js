import React from 'react';

export default class Home_Login extends React.Component {
  render() {
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" placeholder="Username"/>
          <input type="password" className="form-control" placeholder="Password"/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
