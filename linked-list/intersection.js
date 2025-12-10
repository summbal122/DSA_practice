function getIntersectedNode(headA, headB){
  let setB = new Set();
  let listB = headB
  let listA = headA;
  while (listB !== null){
    setB.add(listB)
    listB = listB.next;
    }
  
    while (listA !== null){
      if(setB.has(listA)){
        return listA
      }
      listA = listA.next
        
    }

    return null

}