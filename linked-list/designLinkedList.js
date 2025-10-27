function LinkedList(){
  this.head = null;
  this.size = 0;
}
function Node(val){
  this.val=val;
  this.next=null;
}
function addAtHead(val){
  let newNode = new Node(val)
  newNode.next = this.head;
  this.head = newNode;
  this.size = this.size +1
}

function addAtTail(val){
    let newNode = new Node(val)
  if (this.head === null){
  
    this.head = newNode;
    
  } else {
      let curr = this.head;
  while(curr.next !== null){
    curr = curr.next;
  }
  curr.next = newNode;

  }
}

function addAtIndex(index, val){
    if (index < 0 || index > this.size) return;
  let newNode = new Node(val);

  if (index === 0){ //add at first index
     this.addAtHead(val)
     return
  } else if (index ===this.size){ //add at last index
    this.addAtTail(val)
    return
  } else {
      let curr = this.head;
  for(let i = 0; i < index - 1 ; i ++){
    curr = curr.next
  }
  newNode.next = curr.next; // don't change order
  curr.next = newNode;

  }

}

function getIndex(index){
  if ( index < 0 || index >= this.size) return -1
  let curr = this.head;    
  for (i = 0; i< index; i++){
    curr = curr.next
  }
  return curr.val;
}

function deleteAtIndex(index){
  if ( index < 0 || index >= this.size) return -1
   if (index === 0 ){
    this.head = this.head.next
     }
   let curr = this.head
    for (let i = 0; i< index-1 ; i++){
        curr = curr.next
    }
    curr.next = curr.next.next

}