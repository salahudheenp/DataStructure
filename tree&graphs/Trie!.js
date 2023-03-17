const treeify = require('treeify')

class node{
    constructor(){
        this.children=new Map()
        this.isEnd=false
    }
    
}
class trie{
    constructor(){
        this.root=new node()
    }

    insert(word){
        let curr=this.root
        for(let letter of word) {
            if (!curr.children.has(letter)) {
                curr.children.set(letter,new node())
            }
            curr=curr.children.get(letter)
        }
        curr.isEnd=true

    }

    suggest(word){
        let node=this.root
        let curr=""
        for (const char of word) {
            if (!node.children.has(char)) {
                return []
            }
            node=node.children.get(char)
            curr+= curr+char
        }
        let list=[]
        this.suggestHelper(node,list,curr)
            return list
        
    }

    suggestHelper(node,list,curr){
        if (node.isEnd) {
            list.push(curr)
        }
        if (!node.children.size) {
            return
        }
        for(let [char,child] of node.children) {
            this.suggestHelper(child,list,curr+char)
        }
    }
}

const Trie=new trie()
Trie.insert('messi')
Trie.insert('mario')
Trie.insert('marco')
Trie.insert('marcelo')
Trie.insert('manu')
// console.log(Trie);
console.log(Trie.suggest('m'));
 console.log(treeify.asTree(Trie,true));
