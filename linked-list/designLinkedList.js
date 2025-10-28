function LinkedList() {
  this.head = null;
  this.size = 0;  // constructor function
}

function Node(val) {
  this.val = val;
  this.next = null;
}

// Add node at head
LinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val); //linked list has a .prototype property which is an object having methods that instances share
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// Add node at tail
LinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  this.size++;
};

// Add node at index
LinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
};

// Get value at index
LinkedList.prototype.getIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

// Delete node at index
LinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};