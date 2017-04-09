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

export function getMatchedData(id, cb) {
  var matchedData = readDocument('matched', id);
  matchedData.users =
    matchedData.users.map((id) => readDocument('users', id));
  matchedData.items =
    matchedData.items.map((id) => readDocument(('items'), id));
  emulateServerReturn(matchedData, cb);
}
