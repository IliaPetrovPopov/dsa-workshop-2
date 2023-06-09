import LinkedListNode from './linked-list-node.js';

export default class DoublyLinkedList {
  /**
   * @type {LinkedListNode}
   */
  #head = null;

  /**
   * @type {LinkedListNode}
   */
  #tail = null;

  #count = 0;

  addFirst(value) {
    const dummyNode = new LinkedListNode(value);

    if (this.#head) {
      this.#head.prev = dummyNode;
      dummyNode.next = this.#head;
      this.#head = dummyNode;
    } else {
      this.#head = dummyNode;
      this.#tail = dummyNode;
    }

    this.#count++;
  }

  addLast(value) {
    const dummyNode = new LinkedListNode(value);

    if (this.#head) {
      this.#tail.next = dummyNode;
      dummyNode.prev = this.#tail;
      this.#tail = dummyNode;
    } else {
      this.#head = dummyNode;
      this.#tail = dummyNode;
    }

    this.#count++;
  }

  removeFirst() {
    if (!this.#head) {
        throw new Error('Linked list is empty!');
    }

    const dummyValue = this.#head.value;

    if (this.#head === this.#tail) {
        this.#head = null;
        this.#tail = null;
    } else {
        this.#head = this.#head.next;
    }

    this.#count--;

    return dummyValue;
  }

  removeLast() {
    if (!this.#head) {
      throw new Error('Linked list is empty!');
    }

    const dummyValue = this.#tail.value;

    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#tail = this.#tail.prev;
    }

    this.#count--;

    return dummyValue;
  }

  insertBefore(node, value) {
    if (!this.#head) {
      throw new Error('Linked list is empty!');
    }

    
    if(node === this.#head) {
        this.addFirst(value);
        return;
    }
    
    const dummyNode = new LinkedListNode(value);

    let ref = this.#head;

    while (ref) {
      if (ref === node) {
        dummyNode.prev = ref.prev;
        dummyNode.next = ref;

        ref.prev.next = dummyNode;
        ref.prev = dummyNode;
        this.#count++;

        break;
      }

      ref = ref.next;
    }
  }

  insertAfter(node, value) {
    if (!this.#head) {
      throw new Error('Linked list is empty!');
    }

    if(node === this.#tail) {
        this.addLast(value);
        return;
    }

    const dummyNode = new LinkedListNode(value);

    let ref = this.#head;

    while(ref) {

        if(ref === node) {
            dummyNode.next = ref.next;
            dummyNode.prev = ref;

            ref.next.prev = dummyNode;
            ref.next = dummyNode;
            this.#count++;

            break;
        }

        ref = ref.next;
    }
  }

  find(val) {
    if (!this.#head) {
      return null;
    }

    let ref = this.#head;

    while (ref) {
      if (ref.value === val) {
        break;
      }

      ref = ref.next;
    }

    return ref;
  }

  values() {
    const dummyArr = [];
    let ref = this.#head;

    while (ref) {
      dummyArr.push(ref.value);
      ref = ref.next;
    }

    return dummyArr;
  }

  get count() {
    return this.#count;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}
