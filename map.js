
function concat(arr1, arr2){
  let list = [];
  arr1.map(x => list.push(x));
  arr2.map(y => list.push(y));
  return list;
}

//using map, I am declaring that for every x in the array, push x to let list

function merge(arr1, arr2){
  let mList = [];
  arr1.map(x => mList.push(x));
  arr2.map(y => mList.push(y));
  mList.sort(function(a, b) {
    return a - b;
  })
  return mList;

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));

console.log(55000 / 52);

