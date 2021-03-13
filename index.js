"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdjList_1 = require("./AdjList/AdjList");
let list1 = new AdjList_1.AdjList();
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
AdjList_1.AdjList.vertexFactory(list1, vertices);
AdjList_1.AdjList.edgeFactory(list1, edges);
console.log(list1);
console.log(list1.dfs("A", "H"));
