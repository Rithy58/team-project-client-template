import React from 'react';

export default class Home_Feed extends React.Component {
  render() {
    return (
        <div className="col-md-9 home-feed">
          {React.Children.map(this.props.children, function(child) {
              return (
                <div>
                {child}
                <br />
                </div>
              )
            })}
      </div>
    )
  }
}
