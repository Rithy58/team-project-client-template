import React from 'react';

export default class Home_Side_Bar extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <img className="img-circle user-image"  src="http://thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-026.jpg" alt="Cinque Terre" width="175" height="175"/>
        <div className="postings">
          Bunny Carrots
        </div>
        <div className="books">
          <div className="media">
            <div className="media-left">
              <img className="media-object" src="https://upload.wikimedia.org/wikipedia/en/4/41/Clrs3.jpeg"/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">Introduction to Algorithms</h4>
              <ul className="list-group">
                <li className="list-group-item">Author:  Thomas H. Cormen</li>
                <li className="list-group-item">Edition: 3rd Edition</li>
                <li className="list-group-item">ISBN: 978-0262033848</li>
                <li className="list-group-item">Publisher: PubPub, Inc</li>
              </ul>
            </div>
        </div>
      </div>
      <div className="books">
        <div className="media">
          <div className="media-left">
            <img className="media-object" src="https://images-na.ssl-images-amazon.com/images/I/517euJ3iGeL._SX258_BO1,204,203,200_.jpg"/>
          </div>
          <div className="media-body">
            <h4 className="media-heading">Java for Dummies</h4>
            <ul className="list-group">
              <li className="list-group-item">Author:  Barry Burd</li>
              <li className="list-group-item">Edition: 6th Edition</li>
              <li className="list-group-item">ISBN: 978-1118407806</li>
              <li className="list-group-item">Publisher: PubPub, Inc</li>
            </ul>
          </div>
      </div>
    </div>
    </div>


    )
  }
}
