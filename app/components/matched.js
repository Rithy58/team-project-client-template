import React from 'react';

export default class Matched extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel panel-success match-panel">
          <div className="panel-heading">
            Match Found!
          </div>
        </div>
      </div>
    )
  }
}
