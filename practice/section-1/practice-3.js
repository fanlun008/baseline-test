'use strict';

function collectSameElements(collectionA, objectB) {
  var same = new Array();

  for(var i of collectionB['value']){
    for(var j of collectionA) {
      if(i ==j) {
        same.push(i);
      }
    }
  }

  return same;
}
