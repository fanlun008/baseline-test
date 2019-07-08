'use strict';

function collectSameElements(collectionA, collectionB) {
  var Alength = collectionA.length;

  var Blength = collectionB[0].length;

  var same = new Array();

  for (var i of collectionB[0]) {
    for(var j of collectionA) {
      if (i == j) {
        same.push(i);
      }
    }
  }

  console.log(same);


  return same;
}
