import {IAdjList, AdjList} from "./AdjList/AdjList";

let list1: IAdjList = new AdjList();

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

AdjList.vertexFactory(list1,vertices);
AdjList.edgeFactory(list1, edges);

console.log(list1);
console.log(list1.dfs("A", "H"));