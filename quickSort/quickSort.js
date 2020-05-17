// Same algorithm in JS

function quicksort(array){
  if(array.length < 2) return array

  let pivot = array[0]
  let greater = []
  let lesser = []

  for (let i =1; i<array.length; i++){
    (array[i] < pivot) ? lesser.push(array[i]) : greater.push(array[i]);
  }
  // recursive case
  // left + pivot + right
  return [...quicksort(lesser),pivot,...quicksort(greater)]
}

var arr1 = [7,8,2,0,5,2]
console.log(`Unsorted array ${arr1}`)
console.log(`Sorted array ${quicksort(arr1)}`)
