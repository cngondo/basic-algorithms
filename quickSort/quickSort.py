# Based on divide and conquer algorithm
# Best case scenario: O(nlogn)
# Worst case scenario: O(n^2)

def quicksort(array)
  if len(array) < 2:
    return array
  else:
    pivot = array[0]
    less = [i for i in array[1:] if i <= pivot]
    greater = [i for array[1:] if i > pivot]

    return quicksort(less) + [pivot] + quicksort(greater)

