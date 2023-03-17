class Graph {
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex]=[]
        }
    }

    addEdge(v1,v2){
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1)
        }
        if (!this.adjacencyList[v2]) {
            this.addVertex(v2)
        }
        this.adjacencyList[v1].push(v2)
        // this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1,v2){
        console.log(v1,v2);
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(v => v !==v2)
        this.adjacencyList[v2]=this.adjacencyList[v2].filter(v => v !==v1)

    }

    removeVertex(vertex){
        while (this.adjacencyList[vertex] ) {
            const adjacentVertex=this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
            if (this.adjacencyList[vertex].length===0) {
                break
            }
        }
        delete this.adjacencyList[vertex]
    }
}

const graph =new Graph()
graph.addVertex('A')
console.log(graph);
graph.addEdge('A','B')
graph.addEdge('B','A')
graph.addEdge('B','C')
graph.addEdge('C','B')
graph.addEdge('C','A')
console.log(graph.adjacencyList);

// graph.removeVertex('B')
// graph.removeVertex('A')
graph.removeVertex('C')
// graph.removeEdge('A','B')
console.log(graph.adjacencyList);
