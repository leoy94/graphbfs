import {IAdjList, AdjList} from "./AdjList/AdjList";

let list1: IAdjList = new AdjList();

function vertexFactory(list: IAdjList, vertices: any[]){
    for(let vertex of vertices){
        list.addVertex(vertex.payload,vertex.id);
    }
};

function edgeFactory(list: IAdjList, edges: any[]){
    for(let edge of edges){
        let [vertexID, edgeID] = edge;
        list.addEdge(vertexID, edgeID);
    }
};

let vertices = [
        {payload: {},id: "A"},
        {payload: {},id: "B"},
        {payload: {},id: "C"},
        {payload: {},id: "D"},
        {payload: {},id: "E"},
        {payload: {},id: "F"},
        {payload: {},id: "G"},
        {payload: {},id: "H"}
];

let edges = [
    ["A","B"],
    ["A","C"],
    ["B","H"],
    ["C","D"],
    ["C","E"],
    ["D","C"],
    ["C","A"],
    ["E","F"],
    ["F","G"]
];

vertexFactory(list1,vertices);
edgeFactory(list1, edges);

console.log(list1);
console.log(list1.bfs("D", "H"));