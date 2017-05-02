import React from 'react';
import Home_Item from './home/home_item.js';
import Home_Login from './home/home_login.js';
import Home_User from './home/home_user.js';
import {login, logout, isLogin} from '../services/auth.js';
import io from 'socket.io-client'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "user":{},
        "isLogin": false,
        "listing": []
    };

    this.socket = io.connect();
    this.socket.on('new listing', (data) => {
      var newListing = this.state.listing;
      newListing.push(data);
      this.setState({listing: newListing});
    });

    this.loginFn = this.loginFn.bind(this);
    this.logoutFn = this.logoutFn.bind(this);
  }

  componentDidMount() {
    isLogin((userObj) => {
      if(userObj) {
        this.setState({
          user: userObj,
          isLogin: true
        });
      } else {
        this.setState({
          user: {},
          isLogin: false
        });
      }
    });
  }

  loginFn(user) {
    login(user, (userObj) => {
      if(userObj) {
        this.setState({
          user: userObj,
          isLogin: true
        });
      } else {
        this.setState({
          user: {},
          isLogin: false
        });
      }
    });
  }

  logoutFn(event) {
    event.preventDefault();
    logout(() => {
      this.setState({
        user: {},
        isLogin: false
      });
    });
  }

  render() {
    var loginPanel;

    if(this.state.isLogin) {
      loginPanel = <Home_User logout={this.logoutFn} username={this.state.user.username}/>
    } else {
      loginPanel = <Home_Login login={this.loginFn} />
    }

    return (
      <div className="row center-block">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Items Listing</h3>
            </div>
            <div className="panel-body">
              {
                this.state.listing.map(
                  (item, index) => {
                    return (
                      <Home_Item
                        title={item.title}
                        author={item.author}
                        isbn={item.isbn}
                        price={item.price}
                        key={index}/>
                      );
                    }
                  )
                }
            </div>
          </div>
        </div>

        <div className="col-md-4">
          { loginPanel }
        </div>
      </div>
    )
  }
}
