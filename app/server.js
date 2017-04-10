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
  var feed = {
    "1": {
      "feeditems": {}
    }
  };
  var feedData = readDocument('feed',id);
  feed[1].feeditems =
    feedData[1].items.map((id) => readDocument('feeditems', id));
  emulateServerReturn(feedData, cb);
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
  var queryData = readDocument('feeditems', query);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(queryData, cb);

}
