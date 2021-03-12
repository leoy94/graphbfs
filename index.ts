import {IAdjList, AdjList} from "./AdjList/AdjList";

let list1: IAdjList = new AdjList();

list1.addVertex({},"A");
list1.addVertex({},"B");
list1.addVertex({},"C");
list1.addVertex({},"D");
list1.addVertex({},"E");
list1.addVertex({},"F");
list1.addVertex({},"G");
list1.addVertex({},"H");


list1.addEdge("A", "B");
list1.addEdge("A", "C");
list1.addEdge("C", "D");
list1.addEdge("C", "E");
list1.addEdge("E", "F");
list1.addEdge("F", "G");

console.log(list1);

console.log(list1.bfs("A", "G"));