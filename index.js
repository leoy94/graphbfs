"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdjList_1 = require("./AdjList/AdjList");
let list1 = new AdjList_1.AdjList();
function vertexFactory(list, vertices) {
    for (let vertex of vertices) {
        list.addVertex(vertex.payload, vertex.id);
    }
}
;
function edgeFactory(list, edges) {
    for (let edge of edges) {
        let [vertexID, edgeID] = edge;
        list.addEdge(vertexID, edgeID);
    }
}
;
let vertices = [
    { payload: {}, id: "A" },
    { payload: {}, id: "B" },
    { payload: {}, id: "C" },
    { payload: {}, id: "D" },
    { payload: {}, id: "E" },
    { payload: {}, id: "F" },
    { payload: {}, id: "G" },
    { payload: {}, id: "H" }
];
vertexFactory(list1, vertices);
let edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "H"],
    ["C", "D"],
    ["C", "E"],
    ["D", "C"],
    ["C", "A"],
    ["E", "F"],
    ["F", "G"]
];
edgeFactory(list1, edges);
// list1.addEdge("A", "B");
// list1.addEdge("A", "C");
// list1.addEdge("B", "H");
// list1.addEdge("C", "D");
// list1.addEdge("C", "E");
// list1.addEdge("D", "C");
// list1.addEdge("C", "A");
// list1.addEdge("E", "F");
// list1.addEdge("F", "G");
console.log(list1);
console.log(list1.bfs("D", "H"));
