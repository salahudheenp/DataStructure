class node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null

    }
}

class bst{
    constructor(){
        this.root=null
    }

    isEmpty(){
       return this.root===null
    }

    insert(value){
        const Node=new node(value)
        if (this.isEmpty()) {
            this.root=Node
        }
        else{
            this.insertNode(this.root,Node)
        }
    }

    insertNode(root,Node){
        if (Node.value<root.value) {
            if (!root.left) {
                root.left=Node
            }else{
                this.insertNode(root.left,Node)
            }
          
            
        }
        if (Node.value>root.value) {
            if (!root.right) {
                root.right=Node
            }else{
                this.insertNode(root.right,Node)
            }
        }
    }


    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}


const Bst=new bst()

Bst.insert(30)
Bst.insert(70)
Bst.insert(10)
Bst.insert(40)
Bst.insert(50)
console.log('preOrder');
Bst.preOrder(Bst.root)
console.log('postOrder');
Bst.postOrder(Bst.root)
console.log("inOrder");
Bst.inOrder(Bst.root)