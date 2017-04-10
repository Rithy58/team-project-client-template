import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = 'UBarter';

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "username": "Alpha",
      "hash": "1234",
      "profile": 1,
      "listings": [
        1
      ],
      "matched": [
        1
      ]
    },
    "2": {
      "_id": 2,
      "username": "Beta",
      "hash": "5678",
      "profile": 2,
      "listings": [
        2
      ],
      "matched": [
        1
      ]
    }
  },
  "profiles": {
    "1": {
      "picture": "url",
      "email": "alpha@umass.edu",
      "title": "Student",
      "university": "UMass",
      "major": "Computer Science"
    },
    "2": {
      "picture": "url",
      "email": "beta@umass.edu",
      "title": "Student",
      "university": "UMass",
      "major": "Computer Science"
    }
  },
  "listings": {
    "1": {
      "owner": 1,
      "want": [
        1
      ],
      "has": [
        2
      ]
    },
    "2": {
      "owner": 2,
      "want": [
        2
      ],
      "has": [
        1
      ]
    }
  },
  "items": {
    "1": {
      "picture": "url",
      "title": "CS220",
      "isbn": "4321",
      "price": 120
    },
    "2": {
      "picture": "url",
      "title": "CS240",
      "isbn": "8765",
      "price": 120
    }
  },
  "matched": {
    "1": {
      "users": [
        1, 2
      ],
      "listings": [
        1, 2
      ]
    }
  },
  "feeditems": {
    "1": {
      "_id": 1,
      "pic": "https://upload.wikimedia.org/wikipedia/en/4/41/Clrs3.jpeg",
      "title": "Introduction to Algorithms",
      "author":"Thomas H. Cormen",
      "edition":"3rd Edition",
      "isbn": "978-0262033848",
      "publisher": "PubPub, Inc"
    },
    "2": {
      "_id": 2,
      "pic": "https://images-na.ssl-images-amazon.com/images/I/41%2Bzl9fgEML._SX431_BO1,204,203,200_.jpg",
      "title": "Discrete Mathematics with Applications",
      "author":"Susanna S. Epp",
      "edition":"4th Edition",
      "isbn": "978-0495391326",
      "publisher": "PubPub, Inc"
    },
    "3": {
      "_id": 2,
      "pic": "https://images-na.ssl-images-amazon.com/images/I/517euJ3iGeL._SX258_BO1,204,203,200_.jpg",
      "title": "Java for Dummies",
      "author":"Barry Burd",
      "edition":"6th Edition",
      "isbn": "978-1118407806",
      "publisher": "PubPub, Inc"
    }
  },
  "feed":{
    "1":{
      "feeditems":[
        1,2,3
      ]
    }
  },
  "message": {
    "1": {
      "user1": {
        "user": 1,
        "message": [
          "Hi",
          "How are you.",
          "How's your day been?"
        ]

      },
      "user2": {
        "user": 2,
        "message": [

        ]

      }
    }
  }
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
