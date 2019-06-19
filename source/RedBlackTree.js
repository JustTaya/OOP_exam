let Color = Object.freeze({ "red": 1, "black": 2 });

class RedBlackNode extends BinaryNode {
    constructor(nodeKey, nodeParent) {
        super(nodeKey, nodeParent);
        this._color = Color.red;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        if (newColor === Color.red || newColor === Color.black) {
            this._color = newColor;
        }
    }

    get grandparent() {
        return this.parent.parent;
    }

    get uncle() {
        let g = this.grandparent;
        if (g.left === this.parent)
            return g.right;
        else
            return g.left;
    }
}

class RedBlackTree extends BinaryTree {
    constructor() {
        super();
    }

    insertKey(newKey) {
        let node = new RedBlackNode(newKey, null);
        this._insertNode(node);
        this._insertCase1(node);
        //await treeView.updateView(makeMatrix(this));
    }

    searchKey(key) {
        super.searchKey(key);
        let current = this._root;
        while (current != null) {
            //await treeView.findNode(current).blink(colors['green']);
            if (current.key > key) {
                current = current.left;
            } else if (current.key < key) {
                current = current.right;
            } else {
                //await treeView.findNode(current).blink(colors['yellow']);
                return current;
            }
        }
        return null;
    }

    _insertNode(node) {
        if (this._root == null) {
            this._root = node;
            //treeView.createNewNode(node);
            //treeView.endInsertion(makeMatrix(this));
        } else {
            let current = this._root;
            //treeView.createNewNode(node);

            while (current != null) {
                //await treeView.compareWith(current);
                if (current.key > node.key) {
                    //await treeView.moveLeft();
                    if (current.left == null) {
                        current.left = node;
                        node.parent = current;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    //await treeView.moveRight();
                    if (current.right == null) {
                        current.right = node;
                        node.parent = current;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
            //await treeView.endInsertion(makeMatrix(this));
        }
    }

    _insertCase1(node) {
        if (node != null) {
            if (node.parent === null) {
                node.color = Color.black;
                console.log("here");
                //treeView.findNode(node).setStroke('black');
            } else {
                this._insertCase2(node);
            }
        }
    }

    _insertCase2(node) {
        if (node.parent.color !== Color.black) {
            this._insertCase3(node);
        }
    }

    _insertCase3(node) {
        let g = node.grandparent;
        let u = node.uncle;

        if (u != null && u.color === Color.red) {
            node.parent.color = Color.black;
            u.color = Color.black;
            g.color = Color.red;

            /*treeView.findNode(node.parent).setStroke('black');
            treeView.findNode(u).setStroke('black');
            treeView.findNode(g).setStroke('red');*/
            this._insertCase1(g);
        } else {
            this._insertCase4(node);
        }
    }

    _insertCase4(node) {
        let g = node.grandparent;

        if (node === node.parent.right && node.parent === g.left) {
            this._rotateLeft(node.parent);
            node = node.left;
        } else if (node === node.parent.left && node.parent === g.right) {
            this._rotateRight(node.parent);
            node = node.right;
        }
        this._insertCase5(node);
    }

    _insertCase5(node) {
        let g = node.parent.parent;
        node.parent.color = Color.black;
        g.color = Color.red;

        /*
        treeView.findNode(node.parent).setStroke('black');
        treeView.findNode(g).setStroke('red');
        */

        if (node === node.parent.left && node.parent === g.left) {
            this._rotateRight(g);
        } else {
            this._rotateLeft(g);
        }
    }

    _rotateLeft(node) {
        let rightChild = node.right;
        node.right = rightChild.left;
        if (node.right != null) {
            node.right.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this._root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;

        //await treeView.rotateAround(node, makeMatrix(this));
    }

    _rotateRight(node) {
        let leftChild = node.left;
        node.left = leftChild.right;
        if (node.left != null)
            node.left.parent = node;
        leftChild.parent = node.parent;
        if (node.parent == null)
            this._root = leftChild;
        else if (node === node.parent.left)
            node.parent.left = leftChild;
        else
            node.parent.right = leftChild;
        leftChild.right = node;
        node.parent = leftChild;

        //await treeView.rotateAround(node, makeMatrix(this));
    }

}