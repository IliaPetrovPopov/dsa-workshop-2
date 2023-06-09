import DoublyLinkedList from './src/doubly-linked-list.js';

const dummyDLL = new DoublyLinkedList();

dummyDLL.addFirst(5);
dummyDLL.addLast(4);
dummyDLL.addFirst(6);
dummyDLL.addLast(7);
dummyDLL.addFirst(3);
dummyDLL.addFirst(10);

const node1 = dummyDLL.find(4);
dummyDLL.insertAfter(node1, 12);

const node2 = dummyDLL.find(6);
dummyDLL.insertAfter(node2, 16);

const node3 = dummyDLL.find(16);
dummyDLL.insertBefore(node3, 15);

const node4 = dummyDLL.find(15);
dummyDLL.insertBefore(node4, 90);