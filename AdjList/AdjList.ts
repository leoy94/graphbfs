import {IVertex, Vertex} from "../Vertex/Vertex";

export interface IAdjList extends Map<string,IVertex>{
    addVertex: (payload: any, id: string) => void;
    addEdge: (vertexID: string, edgeID: string) => void;
    removeEdge: (vertexID: string, edgeID: string) => void;
    bfs: (startID: string, findID:string) => void;
}

export class AdjList extends Map implements IAdjList{

    addVertex(payload: any, id: string){
        this.set(id, new Vertex(payload, id));
    }

    addEdge(vertexID: string, edgeID: string){
        this.get(vertexID).addEdge(edgeID);
    }

    removeEdge(vertexID: string, edgeID: string){
        this.get(vertexID).removeEdge(edgeID);
    }

    bfs(startID: string, findID:string){
        let visited = new Map();
        type queueItem = string[];
        let queue: queueItem[] = [];

        queue.push([startID, ""]);

        while(queue.length > 0){
            //pop off queue
            let queuedItem = queue.pop();

            //get current and last if they exist
            let current, last;
            if(queuedItem){
                [current, last] = queuedItem;
            }

            if(current == findID){
                let tree = [current];
                while(last != ''){
                    tree.unshift(last);
                    last = visited.get(last);
                }
                return tree;
            }

            if(!visited.has(current)){
                for(let edge of this.get(current).edges){
                    queue.push([edge,current]);
                }
                visited.set(current, last);
            }
        }
        return [];
    }
}

