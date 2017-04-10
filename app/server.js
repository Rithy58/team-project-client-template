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

export function getHomeFeedData(id, cb){
  var feedData = readDocument('feed',id);
  feedData.items =
    feedData.items.map((id) => readDocument(('feeditems'), id));
  emulateServerReturn(feedData, cb);
}

export function getMatchedData(id, cb) {
  var matchedData = readDocument('matched', id);
  matchedData.users =
    matchedData.users.map((id) => readDocument('users', id));
  matchedData.items =
    matchedData.items.map((id) => readDocument(('items'), id));
  emulateServerReturn(matchedData, cb);
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
