//!This is not a chart that you are thinking of 

/*
A graph data structire consists of a finite (andd possibly 
mutable) set of vertices or nodes or points, together with a 
set of unordered pairs of these vertices for an undirected 
graph or a set of ordered pairs for a directed graph.

Graph ek aisa data structure hai jo nodes aur edges se bana hota hai. Iska use different objects ya data points ke beech sambandh darshane ke liye kiya jata hai. Nodes objects ya data points ko darshate hain, jabki edges unke beech ke sambandhon ko darshate hain. Graphs ka use mapping, social networks, aur data analysis jaise various applications ke liye kiya jata hai.

Terminologies:
Weighted vs Unweighted:
Weighted aur unweighted graph do alag-alag prakar ke graphs hote hain. Unweighted graph mein, har edge ka same weight hota hai, yaani sabhi edges ka weight 1 hota hai. Lekin weighted graph mein, har edge ka weight alag-alag hota hai aur ye weight positive, negative, ya zero bhi ho sakta hai. Weighted graph mein, edges ke weights ko use karke different algorithms, jaise ki shortest path algorithm, ka use kiya jata hai.

Undirected vs Directed Graph:
Undirected graph mein, har edge do nodes ko symmetrically connect karta hai, yaani dono nodes ke beech ka sambandh dono taraf se ho sakta hai. Lekin directed graph mein, har edge ke connection directionally hota hai, yaani ek node se dusre node ke taraf hi jata hai. Directed graph mein, nodes aur edges ko arrows se darshaya jata hai jisse edge ka direction darshaya ja sakta hai. 
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    //add a vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    //add an edge
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
        if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(key => key !== vertex2);

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(key => key !== vertex1);
    }

    removeVertex(vertexToRemove) {
        if (!this.adjacencyList[vertexToRemove]) return;
    
        // remove the vertex from the adjacency list of each vertex it's connected to
        const vertices = Object.keys(this.adjacencyList);
        for (let i = 0; i < vertices.length; i++) {
            const vertex = vertices[i];
            const index = this.adjacencyList[vertex].indexOf(vertexToRemove);
            if (index !== -1) {
                this.adjacencyList[vertex].splice(index, 1);
            }
        }
    
        // remove the vertex and its adjacency list from the graph
        delete this.adjacencyList[vertexToRemove];
    }

    
    
}

const graph = new Graph();
graph.addVertex("Mumbai");
graph.addEdge("Mumbai", "Pune")
graph.addEdge("Thane", "Pune")
//graph.removeEdge("Mumbai", "Pune")
graph.removeVertex("Mumbai");
console.log(graph)