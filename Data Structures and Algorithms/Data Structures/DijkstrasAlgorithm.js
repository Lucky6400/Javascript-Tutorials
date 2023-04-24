class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    //add a vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    //add an edge
    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
        if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    // find shortest path between two nodes
    dijkstra(fromVertex, toVertex) {
        let distances = {};
        const previous = {};
        let smallest;
        let path = []; // to return at the end
        const pq = new PriorityQueue();
        Object.keys(this.adjacencyList).forEach(key => {
            if (key === fromVertex) {
                distances[key] = 0;
                pq.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                pq.enqueue(key, Infinity);
            }
            previous[key] = null;
        });

        while (pq.values.length) {
            smallest = pq.dequeue().val;

            if (smallest === toVertex) {
                // console.log(distances);
                // console.log(previous);
                /// build up the path to return at the end
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                let arr = this.adjacencyList[smallest];

                for (let neighbor in arr) {

                    // find neighboring node
                    let nextNode = arr[neighbor];
                    //console.log(nextNode)

                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    // console.log(candidate);

                    if(candidate < distances[nextNode.node]) {

                        // updating new smallest distance to neighbor
                        distances[nextNode.node] = candidate;

                        // updating previous: how we got to neighbor
                        previous[nextNode.node] = smallest;

                        // enqueue in priority queue with new priority
                        pq.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();
    }
}

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
console.log(wg.dijkstra("A", "E"));
