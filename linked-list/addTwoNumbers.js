function addTwoNumbers(l1,l2){
 let carry = 0;
  let val1;
  let val2;
   let dummy = new ListNode(0);
  let current = dummy;
  while(l2 || l1 || carry){ //if carry exists, run the loop
    val1 = l1 ? l1.val : 0
    val2 = l2 ? l2.val : 0
    sum =  val1 + val2 + carry
    digit = sum % 10
    carry = Math.floor(sum/10)
   current.next = new ListNode(digit);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
   return dummy.next;  //dummy is just helper, actual result starts from next node
};
// TC = O(n)
// SC = O(n)