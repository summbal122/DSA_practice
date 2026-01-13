function removeNode(head){
  let sentinel = new ListNode();
   sentinel.next = head;

   let length = 0;
   while(head){
    head = head.next
    length ++
   }
   let prevPos = length - n
   let prev = sentinel;

   for ( let i = 0; i < prevPos ; i++){
    prev = prev.next
   }
   prev.next = prev.next.next

   return sentinel.next

}

// one pass

function removeNthNode(head,n){
  let sentinel = new ListNode();
  sentinel.next = head;
  let first = sentinel
  let second = sentinel
  for (let i = 0; i< n; i++){
    first = first.next
  }
  while ( first.next){
    second = second.next
    first = first.next
  }
  second.next = second.next.next
  return sentinel.next

}