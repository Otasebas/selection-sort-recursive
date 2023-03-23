function selectionSortRecursive(arr) {
  
  let sorted = []

  let count = 0

  while (arr.length > 0){
    const min = Math.min(...arr)
    const indx = arr.indexOf(min)

    sorted.push(min)
    arr.splice(indx, 1)
  }

  return sorted

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
