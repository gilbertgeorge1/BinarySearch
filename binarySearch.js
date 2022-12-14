const fs = require('fs');

// Binary search function
function binarySearch(file, target) {
    // Read the file and split the data by commas
    let data = fs.readFileSync(file, 'utf8').split(',');
  
    // Convert the data to numbers (assuming they are all numbers)
    data = data.map(Number);
  
    // Sort the array in ascending order
    data.sort((a, b) => a - b);
  
    // Initialize start and end indices
    let start = 0;
    let end = data.length - 1;
  
    // Keep going until the indices cross
    while (start <= end) {
      // Calculate the middle index
      let mid = Math.floor((start + end) / 2);
  
      // If the element at the middle index is the target, return it
      if (data[mid] === target) {
        return data[mid];
      } 
      // If the target is less than the element at the middle index, search the left half of the array
      else if (target < data[mid]) {
        end = mid - 1;
      } 
      // If the target is greater than the element at the middle index, search the right half of the array
      else {
        start = mid + 1;
      }
    }
  
    // If the element is not found, return -1
    return -1;
  }
  
  // Test the binary search function with a sample file
  let file = 'data.txt';
  let target = Number(process.argv[2]);

  console.log(binarySearch(file, target)); // should print 7
  