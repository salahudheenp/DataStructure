
class node {
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
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
        }else{
            console.log(value,'//');
            this.insertNode(this.root,Node)
        }
    }
    insertNode(root,Node){
        if (Node.value<root.value) {
            if (root.left===null) {
                root.left=Node
            }else{
                this.insertNode(root.left,Node)
            }
        }else{
            if (root.right===null) {
                root.right=Node
            }else{
                this.insertNode(root.right,Node)
            }
        }
    }

    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if (root) {
            // console.log(root.value);
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

    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while (queue.length) {
            let curr=queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    search(root,value){
        if (!root) {
            return false
        }else{
            if (root.value===value) {
                return true
            }
            else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    // minimum

    min(root){
        if (!root.left) {
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    // maximum
    max(root){
        if (!root.right) {
            return root.value
        }else{
            return this.max(root.right)
        }
    }



    // delete

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root===null) {
            return root
        }
        if (value<root.value) {
            root.left=this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if (!root.left&&!root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }else if (!root.right) {
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    } 

}


const bst =new binarySearchTree()

bst.insert(19)
bst.insert(10)
bst.insert(11)
bst.insert(20)
bst.insert(7)


// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
bst.levelOrder(bst.root)
bst.delete(20)
console.log(bst.search(bst.root,20));
bst.levelOrder(bst.root)
