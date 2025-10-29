function LinkedList(){
  this.head = null
  this.size = 0
}

function Node(val){
  this.val= val;
  this.next= null; //end of the list
}

LinkedList.prototype.addAtHead = function (val){
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++
}

LinkedList.prototype.addToTail = function(val){
  let newNode = new Node(val);

  if(this.head === null){
    this.head = newNode;
  } else{
    let curr = this.head;
    while( curr.next !== null){
      curr = curr.next
    }
    curr.next = newNode
  }
  this.size++

}

LinkedList.prototype.AddAtIndex = function(index, val){
  let newNode = new Node(val);
  if(index < 0 ||index > this.size) return

  if (index === 0){
    this.addAtHead(val)
    return
  } else if (index === this.size){
    this.addToTail(val)
    return
  } else{
    let curr = this.head;
    for( let i = 0; i < index - 1; i++){
      curr = curr.next
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++

  }
}

LinkedList.prototype.deleteAtIndex = function(index){
  if (index < 0 || index >= this.size) return;

  if(index === 0){
    this.head = this.head.next;
  } else{
    let curr = this.head
    for (let i = 0; i < index-1; i++){
      curr = curr.next
    }
    curr.next = curr.next.next;
  }
  this.size --;

}

LinkedList.prototype.getIndex = function (index){
   if (index < 0 || index >= this.size) return -1;
   let curr = this.head;
   for (let i = 0; i < index ; i++){
    curr = curr.next
   }
   return curr.val
}
