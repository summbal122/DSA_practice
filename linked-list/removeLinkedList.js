function removeLinkedList(){
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel
  while (prev && prev.next){ // do both
    if(prev.next.val === val){
      prev.next = prev.next.next
    } else{
      prev = prev.next
    }

  }
  return sentinel.next; //this is the head after removing nodes

}