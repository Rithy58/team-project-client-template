import React from 'react';

export default class ListInfo extends React.Component {
  render() {
    return (
      <div>
      <form>
      <div className="form-group">
        <label htmlFor="itemCategory">Item Category</label>
        <select className="form-control" id="itemCategory">
          <option>BOOK</option>
          <option>ELECTRONIC</option>
          <option>MONEY</option>
          <option>RANDOM</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="usr">Enter a Valid ISBN#:</label>
        <input type="text" className="form-control" id="usr" />
      </div>
      <div className="form-group">
        <label htmlFor="classSubject">Class Subject</label>
        <select className="form-control" id="classSubject">
          <option>CMP_SCI</option>
          <option>MATH</option>
          <option>ELC_ENG</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="classNumber">Class Number</label>
        <select className="form-control" id="classNumber">
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
