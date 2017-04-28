import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getHomeData(id, cb){
  sendXHR('GET', '/user/'+id+'/home', undefined, (xhr)=>{
      cb(JSON.parse(xhr.responseText));
  });
}

export function getProfileData(id, cb){
  var feed = {
    "user":{},
    "saleitem":[]
  };
  feed.user = readDocument('users', id);
  var listings = readDocument('listings',id);
  feed.saleitem = listings.has.map(
    (index)=>readDocument('saleitem', index)
  );
  emulateServerReturn(feed, cb);

  }


export function getMessageData(messagedId, userId, cb) {
  var messagedData = readDocument('message', messagedId);
  messagedData['user1'].user = readDocument('users', userId);
  messagedData['user2'].user = readDocument('users', messagedData.user2.user);

  emulateServerReturn(messagedData,cb);
}

export function getMatchedData(matchedId, userId, cb) {
  var matched = {
    "1": {
      "user": {},
      "listing": {}
    },
    "2": {
      "user": {},
      "listing": {}
    }
  };
  var matchedData = readDocument('matched', matchedId);
  if(matchedData.users[0] === userId) {
    matched['1'].user = readDocument('users', userId);
    matched['2'].user = readDocument('users', matchedData.users[1]);
    matched['1'].listing =
      readDocument('listings', matchedData.listings[0]);
    matched['2'].listing =
      readDocument('listings', matchedData.listings[1]);
  } else {
    matched['1'].user = readDocument('users', userId);
    matched['2'].user = readDocument('users', matchedData.users[0]);
    matched['1'].listing =
      readDocument('listings', matchedData.listings[1]);
    matched['2'].listing =
      readDocument('listings', matchedData.listings[0]);
  }

  matched['1'].listing.want = matched['1'].listing.want.map(
    (id) => readDocument('items', id)
  );
  matched['1'].listing.has = matched['1'].listing.has.map(
    (id) => readDocument('items', id)
  );

  matched['2'].listing.want = matched['2'].listing.want.map(
    (id) => readDocument('items', id)
  );
  matched['2'].listing.has = matched['2'].listing.has.map(
    (id) => readDocument('items', id)
  );

  emulateServerReturn(matched, cb);
}

/**
* Emulates a REST call to get the data for a particular query.
* @param query The string which is the users query
* @param cb The callback
*/
export function getQueryData(query, cb) {
  // Get the item object with the id "query".
  var queryData = readDocument('items', query);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(queryData, cb);

}

/**
 * Adds a new comment to the database on the given feed item.
 * Returns the updated FeedItem object.
 */
export function postComment(messageId, author, contents, cb) {
  // Since a CommentThread is embedded in a FeedItem object,
  // we don't have to resolve it. Read the document,
  // update the embedded object, and then update the
  // document in the database.
  var messageItem = readDocument('message', messageId);
  messageItem.user1.message.push(contents);
  writeDocument('message', messageItem);
  // Return a resolved version of the feed item so React can
  // render it.
  emulateServerReturn(messageItem, cb);
}

export function postListing(owner, ytitle, yisbn, yprice, ttitle, tisbn, tprice) {

var has = postItem(ytitle, yisbn, yprice);
var want = postItem(ttitle, tisbn, tprice);

  var newListing = {
    "owner": owner,
    "want": [want._id],
    "has": [has._id]
  };

  // Add the listing update to the database.
  // Returns the listing update w/ an ID assigned.
  newListing = addDocument('listings', newListing);

  //console.log(readDocument('listings', newListing._id));

  //console.log(newListing);
  // Add the status update reference to the front of the current user's feed.
  var userData = readDocument('users', owner);

  userData.listings.push({newListing});

  //emulateServerReturn(newListing, cb);
}

function postItem(title, isbn, price) {
  var newItem = {
    "picture": "url",
    "title": title,
    "isbn": ""+isbn,
    "price": price
  };

newItem = addDocument('items', newItem);
return newItem;
}
var token = 'eyJpZCI6M30=';
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global SiteError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      SiteError('Could not ' + verb + " " + resource + ": Received " +  statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    SiteError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    SiteError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
