class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
    }

    display(){
        for (let vertex in this.adjacencyList ) {
            console.log(vertex+"-->"+[...this.adjacencyList[vertex]]);
            
        }
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex,adjacentVertex)
            
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)
            // &&
            // this.adjacencyList[vertex2].has(vertex1)
        )
    }
}

const graph=new Graph()
graph.addVertex('A')
graph.addVertex('b')
graph.addVertex('c')
graph.addEdge('A','b')
graph.addEdge('b','c')
graph.display()
console.log(graph.hasEdge('A','b'));