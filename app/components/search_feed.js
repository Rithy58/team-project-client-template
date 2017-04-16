import React from 'react';

export default class Search_Feed extends React.Component {
render() {
return (
<div className="col-md-7">
  <div className="panel panel-default fb-status-update searchbody">
    <div className="panel-body">
      {this.props.numberOfResults} results for <b> {this.props.query} </b>
      <div className="row">
        &#x2063;
      </div>

      {React.Children.map(this.props.children, function(child) {
          return (
            <div>

            {child}
            <br />
            <hr />
            <br />
            </div>

          )
        })}



    <div className="panel-footer">
      <div className="text-center">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <font size="3" color="#3b5998">1    2    3    4    5    6    7    8    9</font>
        <span className="glyphicon glyphicon-chevron-right"></span>
      </div>
  </div>
</div>
</div>
</div>
)
}
}
