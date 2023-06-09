import DoublyLinkedList from '../src/doubly-linked-list.js';
   
    describe('addFirst() should', () => {
        it('update count', () => {
            const list = new DoublyLinkedList();
    
            expect(list.count).toBe(0);
            list.addFirst(300);
            expect(list.count).toBe(1);
        });
    
        it('update list.head when list is empty', () => {
            const list = new DoublyLinkedList();
    
            list.addFirst(300);
            expect(list.head.value).toBe(300);
        });
    
        it('update list.tail when list is empty', () => {
            const list = new DoublyLinkedList();
    
            list.addFirst(300);
            expect(list.tail.value).toBe(300);
        });
    
        it('update list.head when list is not empty', () => {
            const list = new DoublyLinkedList();
    
            list.addFirst(300);
            list.addFirst(400);
            expect(list.head.value).toBe(400);
        });
    
        it('maintain correct order', () => {
            const list = new DoublyLinkedList();
    
            list.addFirst(4);
            list.addFirst(5);
            list.addFirst(6);
            expect(list.values()).toEqual([6, 5, 4]);
        });
    }); 
    
    describe('addLast() should', () => {
        it('update count', () => {
            const list = new DoublyLinkedList();
    
            expect(list.count).toBe(0);
            list.addLast(300);
            expect(list.count).toBe(1);
        });
    
        it('update list.tail when list is empty', () => {
            const list = new DoublyLinkedList();
    
            list.addLast(300);
            expect(list.tail.value).toBe(300);
        });
    
        it('update list.head when list is empty', () => {
            const list = new DoublyLinkedList();
    
            list.addLast(300);
            expect(list.head.value).toBe(300);
        });
    
        it('update list.tail when list is not empty', () => {
            const list = new DoublyLinkedList();
    
            list.addLast(300);
            list.addLast(400);
            expect(list.tail.value).toBe(400);
        });
    
        it('maintain correct order', () => {
            const list = new DoublyLinkedList();
    
            list.addLast(4);
            list.addLast(5);
            list.addLast(6);
            expect(list.values()).toEqual([4, 5, 6]);
        });
    });
    
    describe('count should', () => {
        it('return 0 when list is empty', () => {
            const list = new DoublyLinkedList();
    
            expect(list.count).toBe(0);
        });
    
        it('return correct when not empty', () => {
            const list = new DoublyLinkedList();
            for (let i = 0; i < 123; i++) {
                list.addLast(i);
                list.addFirst(i);
            }
    
            expect(list.count).toBe(123 * 2);
        });
    });
    
    describe('values() should', () => {
        it('return empty array when list is empty', () => {
            const list = new DoublyLinkedList();
    
            expect(list.values()).toEqual([]);
        });
    
        it('return array when not empty', () => {
            const list = new DoublyLinkedList();
            for (let i = 0; i < 3; i++) {
                list.addLast(i);
                list.addFirst(i);
            }
    
            expect(list.values()).toEqual([2, 1, 0, 0, 1, 2]);
        });
    });
    
    describe('find() should', () => {
        it('return head when first', () => {
            const list = new DoublyLinkedList();
            list.addFirst(2);
            list.addFirst(4);
    
            const node = list.find(4);
    
            expect(node.value).toBe(4);
            expect(node).toBe(list.head); // reference check
        });

        it('return tail when last', () => {
            const list = new DoublyLinkedList();
            list.addFirst(2);
            list.addFirst(4);
    
            const node = list.find(2);
    
            expect(node.value).toBe(2);
            expect(node).toBe(list.tail); // reference check
        });
    
        it('return correct node when many', () => {
            const list = new DoublyLinkedList();
            list.addFirst(2);
            list.addFirst(4);
            list.addFirst(7);
            list.addFirst(5);
            list.addFirst(3);
            list.addFirst(9);
    
            const node = list.find(7);
            expect(node.value).toBe(7);
        });
    
        it('return null when list is empty', () => {
            const list = new DoublyLinkedList();
            const node = list.find(1234);
            expect(node).toBe(null);
        });
    
        it('return null when not present', () => {
            const list = new DoublyLinkedList();
            list.addFirst(2);
            list.addFirst(4);
            list.addFirst(7);
            list.addFirst(5);
            list.addFirst(3);
            list.addFirst(9);
    
            const node = list.find(300);
            expect(node).toBe(null);
        });
    });
    
    describe('tail should', () => {
        it('be null when list is empty', () => {
            const list = new DoublyLinkedList();
            expect(list.tail).toBe(null);
        });
    
        it('be null after last removal', () => {
            const list = new DoublyLinkedList();
            list.addLast(2);
            list.removeLast();
            expect(list.tail).toBe(null);
        });
    
        it('return correct value when not null', () => {
            const list = new DoublyLinkedList();
            list.addFirst(4);
            list.addFirst(8);
            expect(list.tail.value).toBe(4);
        });
    });
    
    describe('insertAfter() should', () => {
        it('insert in middle', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(4);
    
            const node = list.find(2);
            list.insertAfter(node, 3);
    
            expect(list.values()).toEqual([1, 2, 3, 4]);
        });
    
        it('insert at end', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(3);
    
            const node = list.find(3);
            list.insertAfter(node, 4);
    
            expect(list.values()).toEqual([1, 2, 3, 4]);
        });
    
        it('update tail', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(3);
    
            const node = list.find(3);
            list.insertAfter(node, 4);
    
            expect(list.tail.value).toBe(4);
        });
    
        it('update count', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(3);
    
            const node = list.find(3);
            list.insertAfter(node, 4);
    
            expect(list.count).toBe(4);
        });
    
        it('throw when null', () => {
            const list = new DoublyLinkedList();
    
            expect(() => list.insertAfter(null, 5)).toThrow();
        });
    });
    
    describe('insertBefore() should', () => {
        it('insert in middle', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(4);
    
            const node = list.find(4);
            list.insertBefore(node, 3);
    
            expect(list.values()).toEqual([1, 2, 3, 4]);
        });
    
        it('insert at beginning', () => {
            const list = new DoublyLinkedList();
            list.addLast(2);
            list.addLast(3);
            list.addLast(4);
    
            const node = list.find(2);
            list.insertBefore(node, 1);
    
            expect(list.values()).toEqual([1, 2, 3, 4]);
        });
    
        it('update head', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(3);
    
            const node = list.find(1);
            list.insertBefore(node, 4);
    
            expect(list.head.value).toBe(4);
        });
    
        it('update count', () => {
            const list = new DoublyLinkedList();
            list.addLast(1);
            list.addLast(2);
            list.addLast(3);
    
            const node = list.find(3);
            list.insertBefore(node, 4);
    
            expect(list.count).toBe(4);
        });
    
        it('throw when null', () => {
            const list = new DoublyLinkedList();
    
            expect(() => list.insertBefore(null, 5)).toThrow();
        });
    });
    
    describe('removeFirst() should', () => {
        it('return correct value, when one item', () => {
            const list = new DoublyLinkedList();
            list.addLast(2);
    
            expect(list.removeFirst()).toBe(2);
        });
    
        it('return correct value, when many items', () => {
            const list = new DoublyLinkedList();
            list.addLast(3);
            list.addFirst(2);
            list.addLast(4);
            list.addLast(5);
            list.addFirst(1);
            list.addLast(6);
    
            expect(list.removeFirst()).toBe(1);
        });
    
        it('update count', () => {
            const list = new DoublyLinkedList();
                  
            list.addLast(3);
            expect(list.count).toBe(1);
    
            list.removeFirst();
            expect(list.count).toBe(0);
        });
    
        it('update head', () => {
            const list = new DoublyLinkedList();
             
            list.addLast(3);
            expect(list.head.value).toBe(3);
    
            list.removeFirst();
            expect(list.head).toBe(null);
        });
    
        it('throw when list is empty', () => {
            const list = new DoublyLinkedList();
    
            expect(() => list.removeFirst()).toThrow();
        });
    });
    
    describe('removeLast() should', () => {
        it('return correct value, when one item', () => {
            const list = new DoublyLinkedList();
            list.addFirst(2);
    
            expect(list.removeLast()).toBe(2);
        });
    
        it('return correct value, when many items', () => {
            const list = new DoublyLinkedList();
            list.addLast(3);
            list.addFirst(2);
            list.addLast(4);
            list.addFirst(5);
            list.addFirst(1);
    
            expect(list.removeLast()).toBe(4);
        });
    
        it('update count', () => {
            const list = new DoublyLinkedList();
                  
            list.addLast(3);
            expect(list.count).toBe(1);
    
            list.removeLast();
            expect(list.count).toBe(0);
        });
    
        it('update tail', () => {
            const list = new DoublyLinkedList();
             
            list.addLast(3);
            expect(list.tail.value).toBe(3);
    
            list.removeLast();
            expect(list.tail).toBe(null);
        });
    
        it('throw when list is empty', () => {
            const list = new DoublyLinkedList();
    
            expect(() => list.removeLast()).toThrow();
        });
    });
