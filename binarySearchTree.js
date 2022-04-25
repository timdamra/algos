class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
        this.root.right = null;
        this.root.left = null;
        this.length = 0;
    }

    add(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode <= value) {
                const leftChild = currentNode.left;
                const newNode = new Node(value);

                if (leftChild) {
                    currentNode.left = newNode;
                    newNode.left = leftChild;
                }

                currentNode = currentNode.left;
            } else {
                const rightChild = currentNode.right;
                const newNode = new Node(value);

                if (rightChild) {
                    currentNode.right = newNode;
                    newNode.right = rightChild;
                }

                currentNode = currentNode.right;
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
    }
}

const tree = new Tree(7);

tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
tree.add(10);

console.log(tree);

/*

- binary here refers to the fact that each node has 2 children at most
- binary search are data structures for searching so they need to be in order
- numbers in the left part of tree smaller than root number
- numbers in the right part of tree bigger than root number
- average case lookup is O (log n)

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/
