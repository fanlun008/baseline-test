'use strict';

function collectSameElements(collectionA, collectionB) {
  var long;
  var short;

  if (collectionA.length > collectionB.length) {
    long = collectionA;
    short = collectionB;
  }else {
    long = collectionB;
    short = collectionA;
  }
  console.log(long);

  var same = new Array();

  for (var i of short) {
     for (var j of long) {
       if (i == j) {
         same.push(i);
       }
     }
   }

  same.sort();
  console.log(same);


  return same;
}
