function linkedListCycle(head){
  let curr = head;
  let mySet = new Set();
  while (curr !== null){
    if (mySet.has(curr)){
      return true;
    }
     mySet.add(curr)
    curr = curr.next

  } return false;
 
}
//  slow and fast pointer approach, Flyod's algorithm

function linkedListCycle(head){
  let slow = head;
  let fast = head;
  while ( fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next
    if (fast === slow){
      return true;
    }
    

  } return false;
 
}