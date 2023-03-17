class node{
    constructor(){
        this.children=new Map()
        this.end=false
    }
}

class trie{
    constructor(){
        this.root=new node()
    }
//   insert
    insert(word){
        let  currentNode=this.root
        for (const letter of word) {
            if (!currentNode.children.has(letter)) {
                currentNode.children.set(letter,new node())
            }
            currentNode=currentNode.children.get(letter)

        }
        currentNode.end=true

    }


    search(word){
        if (!word.length) {
            return false
        }
        let currentNode=this.root
        for (const letter of word) {
            if (!currentNode.children.has(letter)) {
                return false
            }
            currentNode=currentNode.children.get(letter)
        }
        return currentNode.end
    }

    suggest(prefix){
        let node=this.root
        let curr=""
        for (const letter of prefix) {
            if (!node.children.has(letter)) {
                return []
            }
            node=node.children.get(letter)
            curr+= letter
        }
        let list=[]
        this.suggestHelper(node,list,curr)
        return list

    }

    suggestHelper(node,list,curr){
        if (node.end) {
            list.push(curr)
        }
        if (!node.children.size) {
            return 
        }
        for (const [char,child] of node.children) {
            this.suggestHelper(child,list,curr+char)
        }

    }
}


const Trie = new trie
Trie.insert('sala')
Trie.insert('sam')
Trie.insert('saa')
Trie.insert('apple')
Trie.insert('appa')
Trie.insert('appu')
Trie.insert('appan')
// console.log(Trie.root.children);
console.log(Trie.suggest("ap"));

// console.log(Trie.startWith('ap')
// );
// console.log(Trie.search('ap'));

// console.log(treeify.asTree(Trie,true));