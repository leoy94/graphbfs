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
        queue.push([startID, ""]);
        while (queue.length > 0) {
            //pop off queue
            let queuedItem = queue.pop();
            //get current and last if they exist
            let current, last;
            if (queuedItem) {
                [current, last] = queuedItem;
            }
            if (current == findID) {
                let tree = [current];
                while (last != '') {
                    tree.unshift(last);
                    last = visited.get(last);
                }
                return tree;
            }
            if (!visited.has(current)) {
                for (let edge of this.get(current).edges) {
                    queue.push([edge, current]);
                }
                visited.set(current, last);
            }
        }
        return [];
    }
}
exports.AdjList = AdjList;
