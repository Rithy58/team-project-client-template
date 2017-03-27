import React from 'react';

export default class SearchItem extends React.Component {
  render() {
    return (
    <div>
      <div className="col-md-5 panel-body">
        <div className="span1 form-title">
          <b>What are you looking for?</b>
        </div>
        { this.props.children }
      </div>
    </div>
    )
  }
}
