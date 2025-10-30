function middleOfLinkedList(head){
    let s = head; // let s = f = head
    let f = head;
    while(f !== null && f.next !== null){
        s= s.next;
        f = f.next.next 
      }
      return s;

}