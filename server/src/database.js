// Your startup's initial mock objects go here
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
    },
    "3": {
      "_id": 3,
      "username": "Bunny Carrots",
      "hash": "1234",
      "profile": 3,
      "listings": [
        3
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
    },
    "3": {
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
    },
    "3": {
      "owner": 3,
      "want": [
        1
      ],
      "has": [
        2,3
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
    },
    "3": {
      "picture": "url",
      "title": "CS230",
      "isbn": "1234",
      "price": 120
    },
    "4": {
      "picture": "url",
      "title": "CS326",
      "isbn": "4321",
      "price": 130
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
    "3":{
      "items":[
        1,2,3,4
      ]
    }
  },
  "message": {
    "1": {
      "_id": 1,
      "user1": {
        "user": 1,
        "message": [
          "Hi"
        ]

      },
      "user2": {
        "user": 2,
        "message": [
          "Howdy"
        ]

      }
    }
  }
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
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
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
