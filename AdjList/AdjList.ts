import {IVertex, Vertex} from "../Vertex/Vertex";

export interface IAdjList extends Map<string,IVertex>{
    addVertex: (payload: any, id: string) => void;
    addEdge: (vertexID: string, edgeID: string) => void;
    removeEdge: (vertexID: string, edgeID: string) => void;
    bfs: (startID: string, findID:string) => {length: number, path?: string[]};
    dfs: (startID: string, findID:string) => {length: number, path?: string[]};


    //Not yet configured
    biDir?: (startID: string, findID:string) => {length: number, path?: string[]};
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

    static vertexFactory(list: IAdjList, vertices: any[]){
        for(let vertex of vertices){
            list.addVertex(vertex.payload,vertex.id);
        }
    };

    static edgeFactory(list: IAdjList, edges: any[]){
        for(let edge of edges){
            let [vertexID, edgeID] = edge;
            list.addEdge(vertexID, edgeID);
        }
    };

    bfs(startID: string, findID:string){
        let visited = new Map();
        type queueItem = string[];
        let queue: queueItem[] = [];

        //push the start vertex
        queue.push([startID, ""]);

        //while the queue has items
        while(queue.length > 0){
            //dequeue last item
            let queuedItem = queue.pop();

            //get currentIndex and lastIndex if they exist
            let current, last;
            [current, last] = queuedItem;

            //if the desired vertex is found print the path
            if(current == findID){
                let path = [current];
                while(last != ''){
                    path.unshift(last);
                    last = visited.get(last);
                }
                return {length: path.length, path: path};
            }

            //for each of the edges in this iteration
            for(let edge of this.get(current).edges){
                //if the edge is not visited and the edge is not queued queue
                if(!visited.has(edge) && !queue.some(item => item[0]===edge)){
                        queue.unshift([edge,current]);
                }
            }
            visited.set(current, last);
        }
        return {length: 0};
    }
    dfs(startID: string, findID:string){
        let visited = new Map();
        type stackItem = string[];
        let stack: stackItem[] = [];

        //push the start vertex
        stack.push([startID, ""]);

        //while the queue has items
        while(stack.length > 0){
            //dequeue last item
            let stackedItem = stack.pop();

            //get currentIndex and lastIndex if they exist
            let current, last;
            [current, last] = stackedItem;

            //if the desired vertex is found print the path
            if(current == findID){
                let path = [current];
                while(last != ''){
                    path.unshift(last);
                    last = visited.get(last);
                }
                return {length: path.length, path: path};
            }

            //for each of the edges in this iteration
            for(let edge of this.get(current).edges){
                //if the edge is not visited and the edge is not queued queue
                if(!visited.has(edge) && !stack.some(item => item[0]===edge)){
                    stack.push([edge,current]);
                }
            }
            visited.set(current, last);
        }
        return {length: 0};
    }

}

