var isPalindrome = function(head) {
  if (!head || !head.next) return true;

  // Find middle
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Compare two halves
  let firstList = head;
  let secondList = prev;

  while (secondList !== null) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
};


// using array

function palindrome (head){
  let curr = head;
  let arr = [];
  while (curr !== null){
    arr.push(curr.val)
    curr = curr.next
  } 
  let mid = Math.floor(arr.length / 2)
  let left = 0;
  let right = arr.length - 1
  while ( left < mid){
    if (arr[left] !== arr[right]){
      return false
    }
    left++;
right--;
  }
  return true
}
