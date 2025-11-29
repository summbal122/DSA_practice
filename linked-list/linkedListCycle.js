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