function oddEven(head){
  if (!head || !head.next) return head;
let odd = head;
let even = head.next;
let evenHead = even; // to connect odd.next to even head because we have to join both

while( even !== null && even.next !==null){n
  odd.next = odd.next.next
  odd = odd.next
  even.next = even.next.next //can't read next of null
  even = even.next
  
}
odd.next = evenHead
return head;
}

// We use the even condition because the code accesses even.next.next, and only even can tell us safely whether that exists.