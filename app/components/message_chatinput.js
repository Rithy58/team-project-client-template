import React from 'react';

export default class Message_ChatInput extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    handleKeyUp(e) {
      if (e.key === "Enter") {
        // Prevent the event from "bubbling" up the DOM tree.
        e.preventDefault();
        var comment = this.state.value.trim();
        if (comment !== "") {
          // Post comment - send to Search
          this.props.onPost(this.state.value);
          this.setState({value: ""});
        }
      }
    }

    handleChange(e) {
      // Prevent the event from "bubbling" up the DOM tree.
      e.preventDefault();
      this.setState({value: e.target.value});
    }

  render() {
    return (
    <div>
      <div className="input-group send-message">
        <input type="text" className="form-control" placeholder="Send a message..." value={this.state.value} onChange={(e) => this.handleChange(e)}
        onKeyUp={(e) => this.handleKeyUp(e)} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-envelope messageenvelope"></span>
            </button>
          </span>
      </div>
    </div>
  )
}
}
