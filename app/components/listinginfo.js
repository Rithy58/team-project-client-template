import React from 'react';

export default class ListInfo extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {isbnValue: '', subject: 'CS', classN: '187'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.props.handleFormChange(e.target.name, e.target.value);
  }

  render() {

    return (
      <div>
      <form>
      <div className="form-group">
        <label htmlFor="usr">Enter a Valid ISBN#:</label>
        <input type="text" className="form-control" id="usr" name="isbn" onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="classSubject">Class Subject</label>
        <select className="form-control" id="classSubject" name="subject" onChange={this.handleChange} >
          <option>CS</option>
          <option>MATH</option>
          <option>EE</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="classNumber">Class Number</label>
        <select className="form-control" id="classNumber" name="classN" onChange={this.handleChange}>
          <option>187</option>
          <option>250</option>
          <option>223</option>
        </select>
      </div>
    </form>
    </div>
    )
  }
}
