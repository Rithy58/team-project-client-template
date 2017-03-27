import React from 'react';

export default class YourItem extends React.Component {
  render() {
    return (
      <div>
      <div className="col-md-5 panel-body">
      <div className="span1 form-title">
        <b>Tell us about your item.</b>
      </div>
      <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Listing Title</label>
        <input type="title" className="form-control" id="exampleInputTitle" placeholder="Enter title" />
      </div>
        <div className="form-group span1">
          <label>Upload Image</label>
          <div className="input-group">
              <span className="input-group-btn">
                  <span className="btn borderbtn btn-default btn-file btn-sm">
                      Browse...<input type="file" id="imgInp" />
                  </span>
              </span>
              <input type="text" className="form-control" readOnly />
          </div>
          <img id="img-upload"/>
      </div>
    </form>
      {this.props.children}
  </div>
  </div>
    )
  }
}
