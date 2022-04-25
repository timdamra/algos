class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        this.length++;

        if (!this.head) {
            this.head = node;
        } else {
            // if there is a "head",
            // then make its "next" property point to new node,
            // which is now the "tail"
            this.tail.next = node;
        }

        this.tail = node;
    }

    pop() {
        return this.delete(this.length - 1);
    }

    _find(index) {
        if (index >= this.length) return null;

        let current = this.head;

        for (let i = 0; i <= index - 1; i++) {
            current = current.next;
        }

        return current;
    }

    get(index) {
        const node = this._find(index);

        if (!node) return void 0;

        return node.value;
    }

    delete(index) {
        if (index === 0) {
            const head = this.head;

            if (head) {
                this.head = head.next;
            } else {
                this.head = null;
            }

            this.length--;
            return head.value;
        }

        const node = this._find(index - 1);

        // this is node we want to delete
        const excise = node.next;

        if (!excise) return null;

        node.next = excise.next;

        if (!node.next) {
            this.tail = node.next;
        }

        this.length--;
        return excise.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/*

starting state: head -> null && tail -> null
first node added: (head -> new node && head.next = tail) && tail -> null
nodes pushed to end of list: (find last added node, point its next to newly pushed node && tail -> new node && tail.next now points to null)

*/

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(value) {
//         const newNode = new Node(value);
//         this.length++;

//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             this.tail.next = newNode;
//         }

//         this.tail = newNode;
//     }

//     find(value) {
//         if (this.head.value === value) {
//             return this.head;
//         }

//         if (this.tail.value === value) {
//             return this.tail;
//         }

//         let currentNode = this.head;

//         while (currentNode) {
//             if (currentNode.value === value) {
//                 return currentNode;
//             }

//             currentNode = currentNode.next;
//         }
//     }
// }

// const list = new LinkedList();
// list.push(1);
// list.push(5);
// list.push(11);
// list.push(19);

// console.log(list.find(11));
