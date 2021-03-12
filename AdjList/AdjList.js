"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjList = void 0;
const Vertex_1 = require("../Vertex/Vertex");
class AdjList extends Map {
    addVertex(payload, id) {
        this.set(id, new Vertex_1.Vertex(payload, id));
    }
    addEdge(vertexID, edgeID) {
        this.get(vertexID).addEdge(edgeID);
    }
    removeEdge(vertexID, edgeID) {
        this.get(vertexID).removeEdge(edgeID);
    }
    bfs(startID, findID) {
        let visited = new Map();
        let queue = [];
        //push the start vertex
        queue.push([startID, ""]);
        //while the queue has items
        while (queue.length > 0) {
            //dequeue last item
            let queuedItem = queue.pop();
            //get currentIndex and lastIndex if they exist
            let current, last;
            if (queuedItem) {
                [current, last] = queuedItem;
            }
            //if the desired vertex is found print the path
            if (current == findID) {
                let path = [current];
                while (last != '') {
                    path.unshift(last);
                    last = visited.get(last);
                }
                return { length: path.length, path: path };
            }
            //for each of the edges in this iteration
            for (let edge of this.get(current).edges) {
                //if the edge is not visited and the edge is not queued queue
                if (!visited.has(edge) && !queue.some(item => item[0] === edge)) {
                    queue.push([edge, current]);
                }
            }
            visited.set(current, last);
        }
        return { length: 0 };
    }
}
exports.AdjList = AdjList;
