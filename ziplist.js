const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList (firstlist, secondlist) {
  const combinedList = [];
  for (let i = 0; i < firstlist.length; i++) {
    combinedList.push(firstlist[i], secondlist[i]);

  }
  return combinedList;
}
console.log(zipList(list1, list2));

const zipListTheSimpleWay = (firstlist, secondlist) => _.flatten(_.zip(firstlist, secondlist));

console.log(zipListTheSimpleWay(list1, list2));
